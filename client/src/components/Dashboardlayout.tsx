import Sidebar from "./sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
