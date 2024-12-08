import { Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface AvailableFieldsProps {
  fields: string[];
  suggestions: Record<string, string[]>;
}

export const AvailableFields = ({ fields, suggestions }: AvailableFieldsProps) => {
  return (
    <Card className="p-4 bg-background">
      <h3 className="font-medium mb-4 text-lg">Available Fields</h3>
      <Droppable droppableId="available">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`space-y-2 min-h-[200px] rounded-lg transition-colors ${
              snapshot.isDraggingOver ? "bg-muted/50 ring-2 ring-primary/20" : ""
            }`}
          >
            <AnimatePresence>
              {fields.map((field, index) => (
                <Draggable key={field} draggableId={field} index={index}>
                  {(provided, snapshot) => (
                    <motion.div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-3 bg-card border rounded-md flex items-center gap-2 group hover:border-primary transition-all ${
                        snapshot.isDragging ? "shadow-lg ring-2 ring-primary" : ""
                      }`}
                    >
                      <div {...provided.dragHandleProps} className="text-muted-foreground hover:text-primary transition-colors">
                        <GripVertical className="h-4 w-4" />
                      </div>
                      <span>{field}</span>
                      {suggestions[field]?.length > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          {suggestions[field].length} suggestions
                        </Badge>
                      )}
                    </motion.div>
                  )}
                </Draggable>
              ))}
            </AnimatePresence>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Card>
  );
};