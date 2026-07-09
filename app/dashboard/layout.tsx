import { requireUser } from "@/lib/auth/require-user";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import DashboardHeader from "@/components/dashboard/dashboard-header";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  await requireUser();

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="min-w-0 flex-1">
        <div className="p-4">
          <DashboardHeader />
          <div className="mt-8">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
