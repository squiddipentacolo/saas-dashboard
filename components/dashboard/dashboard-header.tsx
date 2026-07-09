"use client";

import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/navigation/sidebar";
import { SidebarTrigger } from "../ui/sidebar";

const DashboardHeader = () => {
  const pathname = usePathname();

  let dashboardTitle = sidebarLinks.find(
    (sidebarLink) => sidebarLink.url === pathname,
  )?.title;

  if (dashboardTitle === null || dashboardTitle === undefined)
    dashboardTitle = "Dashboard";

  return (
    <div className="flex gap-4 items-center ">
      <SidebarTrigger />
      <div
        data-orientation="vertical"
        role="none"
        data-slot="separator"
        className="shrink-0 bg-muted-foreground w-px h-4 mx-2"
      ></div>
      <h1 className="text-2xl font-bold">{dashboardTitle}</h1>
    </div>
  );
};

export default DashboardHeader;
