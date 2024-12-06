import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Database, Filter, Search, SortAsc, SortDesc } from "lucide-react";

export const TableView = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['maker-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('maker_projects')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl bg-white/5 backdrop-blur-xl p-6 border border-white/10"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Database className="w-6 h-6 text-[#41f0db]" />
          <h2 className="text-2xl font-bold text-white">Latest Projects</h2>
        </div>
        <div className="flex items-center gap-4">
          <Filter className="w-5 h-5 text-white/50 hover:text-[#ff0abe] transition-colors cursor-pointer" />
          <Search className="w-5 h-5 text-white/50 hover:text-[#ff0abe] transition-colors cursor-pointer" />
          <SortAsc className="w-5 h-5 text-white/50 hover:text-[#ff0abe] transition-colors cursor-pointer" />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-white/10">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-white/5">
              <TableHead className="text-[#41f0db]">Title</TableHead>
              <TableHead className="text-[#41f0db]">Category</TableHead>
              <TableHead className="text-[#41f0db]">Difficulty</TableHead>
              <TableHead className="text-[#41f0db] hidden md:table-cell">Time</TableHead>
              <TableHead className="text-[#41f0db] hidden md:table-cell">Parts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    <Database className="w-6 h-6 text-[#41f0db]" />
                  </motion.div>
                </TableCell>
              </TableRow>
            ) : (
              projects?.map((project) => (
                <TableRow 
                  key={project.id}
                  className="border-white/10 hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <TableCell className="font-medium text-white">{project.title}</TableCell>
                  <TableCell className="text-white/80">{project.category}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.difficulty_level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      project.difficulty_level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {project.difficulty_level}
                    </span>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white/80">{project.estimated_time}</TableCell>
                  <TableCell className="hidden md:table-cell text-white/80">{project.parts_count}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};