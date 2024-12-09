import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { ContentFormData } from "../types/cms";

export const useContentMutations = () => {
  const queryClient = useQueryClient();

  const createContent = useMutation({
    mutationFn: async (formData: ContentFormData) => {
      console.log("Creating content with data:", formData);
      
      const contentData = {
        title: formData.title,
        type: formData.type,
        content: formData.content || {},
        status: formData.status || "draft",
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
        metadata: formData.metadata || {},
      };

      console.log("Prepared content data:", contentData);

      const { data, error } = await supabase
        .from("cms_content")
        .insert(contentData)
        .select()
        .single();

      if (error) {
        console.error("Error creating content:", error);
        throw error;
      }

      console.log("Created content:", data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cms_content"] });
      toast.success("Content created successfully");
    },
    onError: (error) => {
      console.error("Error in content creation:", error);
      toast.error("Failed to create content");
    },
  });

  const updateContent = useMutation({
    mutationFn: async ({ id, ...formData }: ContentFormData & { id: string }) => {
      console.log("Updating content:", id, formData);
      const { data, error } = await supabase
        .from("cms_content")
        .update(formData)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        console.error("Error updating content:", error);
        throw error;
      }

      console.log("Updated content:", data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cms_content"] });
      toast.success("Content updated successfully");
    },
    onError: (error) => {
      console.error("Error in content update:", error);
      toast.error("Failed to update content");
    },
  });

  return {
    createContent,
    updateContent,
  };
};