import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ContentListHeaderProps {
  onNewContent: () => void;
}

export const ContentListHeader = ({ onNewContent }: ContentListHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Content</h2>
      <Button onClick={onNewContent}>
        <Plus className="w-4 h-4 mr-2" />
        New Content
      </Button>
    </div>
  );
};