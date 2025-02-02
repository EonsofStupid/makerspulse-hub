import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuthStore } from "@/lib/store/auth-store";

const STORAGE_KEY = 'auth_session_state';
const SYNC_CHANNEL = 'auth_sync_channel';

export const initializeSessionSync = () => {
  // Listen for storage events (cross-tab communication)
  window.addEventListener('storage', handleStorageChange);
  
  // Listen for online/offline events
  window.addEventListener('online', handleNetworkChange);
  window.addEventListener('offline', handleNetworkChange);
  
  // Initialize broadcast channel for more reliable cross-tab communication
  const channel = new BroadcastChannel(SYNC_CHANNEL);
  channel.addEventListener('message', handleBroadcastMessage);

  return () => {
    window.removeEventListener('storage', handleStorageChange);
    window.removeEventListener('online', handleNetworkChange);
    window.removeEventListener('offline', handleNetworkChange);
    channel.close();
  };
};

const handleStorageChange = async (event: StorageEvent) => {
  if (event.key === STORAGE_KEY) {
    const newState = event.newValue ? JSON.parse(event.newValue) : null;
    if (newState) {
      await syncSessionState(newState);
    }
  }
};

const handleBroadcastMessage = async (event: MessageEvent) => {
  if (event.data.type === 'SESSION_UPDATED') {
    await syncSessionState(event.data.session);
  }
};

const handleNetworkChange = async () => {
  const isOnline = navigator.onLine;
  console.log('Network state changed:', isOnline ? 'online' : 'offline');

  if (isOnline) {
    try {
      // Attempt to refresh session when coming back online
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      
      if (session) {
        await syncSessionState(session);
        toast.success('Reconnected successfully');
      }
    } catch (error) {
      console.error('Failed to refresh session:', error);
      toast.error('Failed to reconnect. Please refresh the page.');
    }
  } else {
    toast.warning('You are offline. Some features may be unavailable.');
  }
};

const syncSessionState = async (newState: any) => {
  try {
    const { setSession, setError } = useAuthStore.getState();
    
    // Validate session state before applying
    if (newState && newState.access_token) {
      setSession(newState);
      
      // Broadcast the change to other tabs
      const channel = new BroadcastChannel(SYNC_CHANNEL);
      channel.postMessage({ type: 'SESSION_UPDATED', session: newState });
      
      // Update local storage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } else {
      setSession(null);
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    console.error('Error syncing session state:', error);
    toast.error('Error syncing session state');
  }
};