import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from '@/components/auth/SessionContext';

interface ImageUploadHandlerProps {
  postId: string;
  onImageUploaded: (imageUrl: string) => void;
}

const ImageUploadHandler: React.FC<ImageUploadHandlerProps> = ({ postId, onImageUploaded }) => {
  const [uploading, setUploading] = useState(false);
  const { session } = useSession();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      if (!session?.user) {
        toast.error("You must be logged in to upload images");
        return;
      }

      setUploading(true);
      console.log('Starting upload process for file:', file.name);
      
      // Upload to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `blog-posts/${postId}/${fileName}`;

      console.log('Uploading to path:', filePath);

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('media')
        .upload(filePath, file, {
          upsert: false
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      console.log('Upload successful:', uploadData);

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(filePath);

      console.log('Public URL generated:', publicUrl);

      // Create media record
      const { error: mediaError } = await supabase
        .from('media')
        .insert({
          name: file.name,
          url: publicUrl,
          type: file.type,
          size: file.size,
          blog_post_id: postId,
          user_id: session.user.id // Add the user_id to comply with RLS
        });

      if (mediaError) {
        console.error('Media record error:', mediaError);
        throw mediaError;
      }

      console.log('Media record created successfully');

      // Append to blog post images array
      const { error: appendError } = await supabase.rpc(
        'append_blog_image',
        { post_id: postId, image_url: publicUrl }
      );

      if (appendError) {
        console.error('Append error:', appendError);
        throw appendError;
      }

      console.log('Image appended to blog post successfully');

      onImageUploaded(publicUrl);
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="file"
        id="image-upload"
        className="hidden"
        accept="image/*"
        onChange={handleFileUpload}
        disabled={uploading}
      />
      <label
        htmlFor="image-upload"
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-[#41f0db]/30 
          bg-black/30 text-white cursor-pointer hover:bg-[#41f0db]/10 transition-all
          ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {uploading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#41f0db] border-t-transparent" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="w-4 h-4 text-[#41f0db]" />
            Upload Image
          </>
        )}
      </label>
    </div>
  );
};

export default ImageUploadHandler;