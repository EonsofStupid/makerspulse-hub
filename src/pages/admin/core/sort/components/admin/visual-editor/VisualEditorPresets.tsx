import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Paintbrush, Layout, Type, Image, Grid, Table, Video, FileText, ListOrdered, MessageSquare } from "lucide-react";

const presets = [
  {
    id: "hero",
    name: "Hero Section",
    category: "layout",
    icon: Layout,
    preview: "A full-width hero section with heading, text, and CTA",
  },
  {
    id: "feature-grid",
    name: "Feature Grid",
    category: "layout",
    icon: Grid,
    preview: "Grid layout for featuring multiple items",
  },
  {
    id: "text-block",
    name: "Text Block",
    category: "content",
    icon: Type,
    preview: "Pre-formatted text block with heading and paragraph",
  },
  {
    id: "image-text",
    name: "Image + Text",
    category: "content",
    icon: Image,
    preview: "Image with accompanying text layout",
  },
  {
    id: "video-section",
    name: "Video Section",
    category: "media",
    icon: Video,
    preview: "Embedded video with optional description",
  },
  {
    id: "testimonial",
    name: "Testimonial",
    category: "content",
    icon: MessageSquare,
    preview: "Customer testimonial with image and quote",
  },
  {
    id: "pricing-table",
    name: "Pricing Table",
    category: "layout",
    icon: Table,
    preview: "Comparison table for pricing plans",
  },
  {
    id: "faq-accordion",
    name: "FAQ Accordion",
    category: "content",
    icon: ListOrdered,
    preview: "Expandable FAQ sections",
  },
  {
    id: "content-tabs",
    name: "Content Tabs",
    category: "layout",
    icon: FileText,
    preview: "Tabbed content sections",
  },
];

interface VisualEditorPresetsProps {
  onSelectPreset: (preset: any) => void;
}

const VisualEditorPresets = ({ onSelectPreset }: VisualEditorPresetsProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-180px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {presets.map((preset) => {
          const Icon = preset.icon;
          return (
            <motion.div
              key={preset.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className="p-4 cursor-pointer hover:bg-accent transition-colors"
                onClick={() => onSelectPreset(preset)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-5 w-5" />
                  <h3 className="font-medium">{preset.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{preset.preview}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default VisualEditorPresets;