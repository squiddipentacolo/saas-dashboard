import { Sidebar } from "../layout/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className="flex-1 md:pl-64">{children}</div>
    </div>
  );
};

export default DashboardLayout;
