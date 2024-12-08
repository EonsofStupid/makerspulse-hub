import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ImportSession } from "../../types";

export const useImportSession = () => {
  const [session, setSession] = useState<ImportSession | null>(null);
  const { toast } = useToast();

  const createSession = async (file: File) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const newSession = {
        file_name: file.name,
        status: "pending" as const,
        target_table: "temp_imports",
        user_id: user?.id || "",
        processed_count: 0,
        error_count: 0,
        validation_errors: [],
        row_count: null,
        original_data: null,
        processed_data: null,
        column_mappings: null,
        completed_at: null
      };

      const { data, error } = await supabase
        .from("import_sessions")
        .insert(newSession)
        .select()
        .single();

      if (error) throw error;
      setSession(data as ImportSession);
      return data;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create import session",
        variant: "destructive"
      });
      return null;
    }
  };

  const updateSession = async (updates: Partial<ImportSession>) => {
    if (!session?.id) return null;
    
    try {
      const { data, error } = await supabase
        .from("import_sessions")
        .update(updates)
        .eq("id", session.id)
        .select()
        .single();

      if (error) throw error;
      setSession(data as ImportSession);
      return data;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update import session",
        variant: "destructive"
      });
      return null;
    }
  };

  return {
    session,
    createSession,
    updateSession
  };
};