import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthGuardProps } from './types';
import { useRoleCheck } from './hooks/useRoleCheck';
import { AuthLoading } from './components/AuthLoading';
import { Unauthorized } from './components/Unauthorized';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export const AuthGuard = ({ 
  children, 
  requireAuth = true, 
  requiredRole,
  fallbackPath = '/login',
  loadingComponent,
  unauthorizedComponent,
  onError
}: AuthGuardProps) => {
  const navigate = useNavigate();
  const { isLoading, hasAccess, error } = useRoleCheck(requireAuth, requiredRole, fallbackPath);

  useEffect(() => {
    if (error) {
      console.error('AuthGuard error:', error);
      toast.error(error instanceof Error ? error.message : 'Authentication error');
      
      if (onError) {
        onError(error);
      }
      
      navigate(fallbackPath, { replace: true });
    }
  }, [error, fallbackPath, navigate, onError]);

  if (isLoading) {
    return loadingComponent || (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AuthLoading />
      </motion.div>
    );
  }

  if (!hasAccess) {
    return unauthorizedComponent || (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <Unauthorized />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};