import React, { useState } from "react";
import { motion } from "framer-motion";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CSSEffectsControl } from "./CSSEffectsControl";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const TransitionSettingsSection = () => {
  const [settings, setSettings] = useState({
    pageTransition: 0.3,
    transitionType: "ease-out",
    hoverScale: 1.05,
    animationPreset: "fade"
  });

  const handleSettingChange = async (key: string, value: number | string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    
    try {
      // Fetch current settings first
      const { data: currentSettings } = await supabase
        .from('site_settings')
        .select('*')
        .single();
      
      if (!currentSettings) {
        toast.error("Failed to load current settings");
        return;
      }

      const { data, error } = await supabase.rpc('update_site_settings', {
        p_site_title: currentSettings.site_title,
        p_tagline: currentSettings.tagline || '',
        p_primary_color: currentSettings.primary_color,
        p_secondary_color: currentSettings.secondary_color,
        p_accent_color: currentSettings.accent_color,
        p_text_primary_color: currentSettings.text_primary_color,
        p_text_secondary_color: currentSettings.text_secondary_color,
        p_text_link_color: currentSettings.text_link_color,
        p_text_heading_color: currentSettings.text_heading_color,
        p_neon_cyan: currentSettings.neon_cyan,
        p_neon_pink: currentSettings.neon_pink,
        p_neon_purple: currentSettings.neon_purple,
        p_border_radius: currentSettings.border_radius,
        p_spacing_unit: currentSettings.spacing_unit,
        p_transition_duration: key === 'pageTransition' ? `${value}s` : currentSettings.transition_duration,
        p_shadow_color: currentSettings.shadow_color,
        p_hover_scale: key === 'hoverScale' ? value.toString() : currentSettings.hover_scale,
        p_font_family_heading: currentSettings.font_family_heading,
        p_font_family_body: currentSettings.font_family_body,
        p_font_size_base: currentSettings.font_size_base,
        p_font_weight_normal: currentSettings.font_weight_normal,
        p_font_weight_bold: currentSettings.font_weight_bold,
        p_line_height_base: currentSettings.line_height_base,
        p_letter_spacing: currentSettings.letter_spacing
      });

      if (error) throw error;
      
      toast.success("Transition settings updated");
    } catch (error) {
      console.error("Failed to update settings:", error);
      toast.error("Failed to update settings");
    }
  };

  return (
    <AccordionItem value="transition-settings">
      <AccordionTrigger className="text-lg font-semibold text-white">
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.02 }}
          className="flex items-center gap-2"
        >
          Transitions & Motion
        </motion.div>
      </AccordionTrigger>
      <AccordionContent className="space-y-6 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CSSEffectsControl
            label="Page Transition Duration"
            type="slider"
            value={settings.pageTransition}
            min={0.1}
            max={1}
            step={0.1}
            onChange={(value) => handleSettingChange('pageTransition', value)}
            description="Duration of page transition animations"
            previewClass="animate-fade-in"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <CSSEffectsControl
            label="Element Transition Type"
            type="select"
            value={settings.transitionType}
            options={[
              { label: "Ease Out", value: "ease-out" },
              { label: "Ease In", value: "ease-in" },
              { label: "Linear", value: "linear" }
            ]}
            onChange={(value) => handleSettingChange('transitionType', value)}
            description="Default transition timing function"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <CSSEffectsControl
            label="Hover Scale Factor"
            type="slider"
            value={settings.hoverScale}
            min={1}
            max={1.2}
            step={0.01}
            onChange={(value) => handleSettingChange('hoverScale', value)}
            description="Scale factor for hover animations"
            previewClass="hover:scale-110"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <CSSEffectsControl
            label="Animation Preset"
            type="select"
            value={settings.animationPreset}
            options={[
              { label: "Fade", value: "fade" },
              { label: "Slide", value: "slide" },
              { label: "Scale", value: "scale" }
            ]}
            onChange={(value) => handleSettingChange('animationPreset', value)}
            description="Default animation preset for elements"
          />
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
};
