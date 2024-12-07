import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import { Button } from "@/components/ui/button";
import ImageThumbnails from './components/ImageThumbnails';
import ExpandedPost from './components/ExpandedPost';
import ImageCarouselDialog from './components/ImageCarouselDialog';

interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    excerpt?: string | null;
    featured_image?: string | null;
    published_at?: string | null;
    views_count?: number | null;
    images?: string[];
  };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const displayContent = post.content.slice(0, 350);
  const hasMoreContent = post.content.length > 350;

  const images = post.images || [];
  const featuredImage = post.featured_image || (images.length > 0 ? images[0] : null);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowCarousel(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 hover:border-[#ff0abe]/50 transition-all duration-300 overflow-visible h-[544px] w-full"
      >
        {featuredImage && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={featuredImage} 
                alt="" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff0abe]/20 to-black/80 mix-blend-overlay" />
            </motion.div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10 rounded-xl" />

        <div className="relative z-20 p-8 h-full flex flex-col">
          <div className="flex-1">
            <h3 className="font-bold text-4xl text-white mb-4 group-hover:text-[#ff0abe] transition-colors duration-300">
              {post.title}
            </h3>
            
            <div className="text-white/80 mb-6 line-clamp-3">
              {displayContent}
              {hasMoreContent && (
                <Button 
                  variant="link" 
                  className="text-[#ff0abe] hover:text-[#ff0abe]/80 pl-2"
                  onClick={() => setIsExpanded(true)}
                >
                  Read more
                </Button>
              )}
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between items-center text-sm mb-8">
              <span className="text-[#ff0abe]">
                {post.published_at ? 
                  formatDistanceToNow(new Date(post.published_at), { addSuffix: true }) :
                  "Recently"
                }
              </span>
              {post.views_count !== null && (
                <span className="text-white/50">
                  {post.views_count} views
                </span>
              )}
            </div>

            {images.length > 0 && (
              <ImageThumbnails 
                images={images} 
                onImageClick={handleImageClick} 
              />
            )}
          </div>
        </div>
      </motion.div>

      <ExpandedPost
        isOpen={isExpanded}
        onOpenChange={setIsExpanded}
        post={post}
      />

      <ImageCarouselDialog
        isOpen={showCarousel}
        onOpenChange={setShowCarousel}
        images={images}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />
    </>
  );
};

export default BlogPostCard;