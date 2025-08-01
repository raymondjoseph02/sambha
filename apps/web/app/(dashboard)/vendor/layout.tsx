import ProtectedRoute from "../../../utils/ProtectedRoutes";

export default function PlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedRoute role="vendor">{children}</ProtectedRoute>;
}
