import { ReactNode } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import AdminNavbar from "../../components/AdminNavbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)] bg-[#f5f5f5] text-[#212320]">
      <div>
        <DashboardSidebar />
      </div>
      <main className="p-12">
        <AdminNavbar />
        {children}
      </main>
    </div>
  );
}
