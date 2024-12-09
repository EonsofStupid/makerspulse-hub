import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { AuthSession } from '@/integrations/supabase/types/auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface SessionContextType {
  session: AuthSession | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('SessionProvider: Starting initialization');
    let mounted = true;

    const initializeSession = async () => {
      try {
        const { data: { session: initialSession }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Initial session fetch error:', error);
          throw error;
        }

        if (initialSession && mounted) {
          console.log('Initial session found:', initialSession.user.id);
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role, username, display_name')
            .eq('id', initialSession.user.id)
            .single();

          if (profileError) {
            console.error('Profile fetch error:', profileError);
            if (mounted) {
              setSession({
                user: {
                  id: initialSession.user.id,
                  email: initialSession.user.email,
                  role: 'subscriber',
                  username: initialSession.user.email?.split('@')[0],
                  display_name: initialSession.user.email?.split('@')[0]
                },
                expires_at: initialSession.expires_at
              });
            }
          } else if (mounted) {
            setSession({
              user: {
                id: initialSession.user.id,
                email: initialSession.user.email,
                role: profile?.role || 'subscriber',
                username: profile?.username || initialSession.user.email?.split('@')[0],
                display_name: profile?.display_name || initialSession.user.email?.split('@')[0]
              },
              expires_at: initialSession.expires_at
            });
          }
        }
      } catch (error) {
        console.error('Session initialization error:', error);
        if (mounted) {
          setSession(null);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initializeSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      console.log('Auth state changed:', event, currentSession?.user?.id);
      
      if (currentSession && mounted) {
        try {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role, username, display_name')
            .eq('id', currentSession.user.id)
            .single();

          const sessionData = {
            user: {
              id: currentSession.user.id,
              email: currentSession.user.email,
              role: profile?.role || 'subscriber',
              username: profile?.username || currentSession.user.email?.split('@')[0],
              display_name: profile?.display_name || currentSession.user.email?.split('@')[0]
            },
            expires_at: currentSession.expires_at
          };

          if (mounted) {
            setSession(sessionData);
            if (event === 'SIGNED_IN') {
              toast.success(`Welcome back, ${sessionData.user.display_name}`);
              navigate('/');
            }
          }
        } catch (error) {
          console.error('Error in auth state change:', error);
          if (mounted) {
            setSession(null);
          }
        }
      } else if (mounted) {
        setSession(null);
        if (event === 'SIGNED_OUT') {
          toast.success('Successfully signed out');
          navigate('/login');
        }
      }
      
      if (mounted) {
        setIsLoading(false);
      }
    });

    return () => {
      console.log('SessionProvider: Cleaning up subscription');
      mounted = false;
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <SessionContext.Provider value={{ session, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};