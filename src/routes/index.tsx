import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { PageTransition } from "@/components/shared/transitions/PageTransition";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useSession } from "@/components/auth/SessionContext";
import { toast } from "sonner";
import { publicRoutes } from "./public-routes";
import { makerSpaceRoutes } from "./maker-space-routes";
import { adminRoutes } from "./admin-routes";

export const AppRoutes = () => {
  const { session, isLoading } = useSession();
  
  console.log('AppRoutes: Session state:', { 
    session: session?.user?.id, 
    isLoading,
    hasSession: !!session
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <PageTransition>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.path === "/login" && session ? (
                  <Navigate to="/maker-space" replace />
                ) : (
                  route.element
                )
              }
            />
          ))}

          {/* Protected Routes */}
          {makerSpaceRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <AuthGuard 
                  requireAuth={true}
                  onError={(error) => {
                    console.error('Auth error:', error);
                    toast.error('Please sign in to access this page');
                  }}
                >
                  {route.element}
                </AuthGuard>
              }
            >
              {route.children?.map((childRoute) => (
                <Route
                  key={childRoute.path}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
            </Route>
          ))}

          {/* Admin Routes */}
          {adminRoutes.map((route) => (
            <Route
              key={route.path}
              path={`/admin/${route.path}`}
              element={
                <AuthGuard 
                  requireAuth={true}
                  requiredRole={["admin", "super_admin"]}
                  fallbackPath="/login"
                  onError={(error) => {
                    console.error('Admin access error:', error);
                    toast.error('Admin access required');
                  }}
                >
                  {route.element}
                </AuthGuard>
              }
            />
          ))}

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
};