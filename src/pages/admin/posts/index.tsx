import React from "react";
import { Navigation } from "@/components/shared/ui/Navigation";
import { AdminNav } from "@/components/admin/dashboard/AdminNav";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PostsTable } from "@/components/admin/posts/PostsTable";
import { usePostsQuery } from "@/hooks/posts/usePostsQuery";

const PostsManagement = () => {
  const { data: posts, isLoading, error, refetch } = usePostsQuery();

  console.log('PostsManagement render state:', { 
    postsCount: posts?.length, 
    isLoading, 
    hasError: !!error 
  });

  const handleDelete = async (postId: string) => {
    try {
      console.log('Attempting to delete post:', postId);
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) {
        console.error('Error deleting post:', error);
        throw error;
      }

      console.log('Post deleted successfully:', postId);
      toast.success('Post deleted successfully');
      refetch();
    } catch (error) {
      console.error('Error in handleDelete:', error);
      toast.error('Failed to delete post');
    }
  };

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-900 pt-20 p-8">
          <AdminNav />
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 text-[#ff0abe] animate-spin" />
          </div>
        </div>
      </>
    );
  }

  if (error) {
    console.error('Error in posts query:', error);
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-900 pt-20 p-8">
          <AdminNav />
          <div className="text-center text-red-500 mt-8">
            <p>Failed to load posts</p>
            <Button 
              onClick={() => refetch()} 
              variant="outline" 
              className="mt-4"
            >
              Try Again
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900 pt-20 p-8">
        <AdminNav />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Posts Management</h1>
            <Button 
              onClick={() => {}} 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            >
              New Post
            </Button>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <PostsTable 
              posts={posts || []} 
              onDelete={handleDelete}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PostsManagement;