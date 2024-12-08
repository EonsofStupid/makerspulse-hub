import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { useSession } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyBuilds = () => {
  const session = useSession();
  const navigate = useNavigate();

  const { data: myBuilds, isLoading } = useQuery({
    queryKey: ['my-builds', session?.user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('printer_builds')
        .select('*')
        .eq('user_id', session?.user?.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-t border-primary/20">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">My Builds</h1>
            <Button onClick={() => navigate("/build/new")} className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              New Build
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myBuilds?.map((build) => (
              <motion.div
                key={build.id}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:bg-card/90">
                  <h3 className="text-xl font-semibold mb-2">{build.printer_name}</h3>
                  <p className="text-sm text-gray-400">{build.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default MyBuilds;