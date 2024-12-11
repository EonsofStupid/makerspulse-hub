import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/lib/store/auth-store";
import { Menu, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MobileNavContent } from "./MobileNavContent";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { session, user, signOut } = useAuthStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out");
    }
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
        >
          <Menu className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#41f0db]" />
        </motion.div>
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#41f0db]/10 to-[#8000ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10 rounded-full" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-black/95 backdrop-blur-xl z-50 p-4"
            >
              <div className="space-y-4">
                {session ? (
                  <div className="flex items-center space-x-3 p-4 border-b border-white/10">
                    <User className="h-8 w-8 text-[#41f0db]" />
                    <div>
                      <p className="text-sm font-medium text-white">{user?.email}</p>
                      <p className="text-xs text-white/60">{user?.role?.toUpperCase()}</p>
                    </div>
                  </div>
                ) : (
                  <Button
                    className="w-full bg-gradient-to-r from-[#41f0db] to-[#8000ff] hover:opacity-90"
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/login");
                    }}
                  >
                    Sign In
                  </Button>
                )}

                <MobileNavContent isOpen={isOpen} onClose={() => setIsOpen(false)} />

                {session && (
                  <Button
                    onClick={handleSignOut}
                    className="w-full mt-4 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    variant="ghost"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};