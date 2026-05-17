"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const sidebarItems = [
    { name: "Dashboard", href: "/" },
    { name: "Ordini", href: "/orders" },
    { name: "Clienti", href: "/customers" },
    { name: "Impostazioni", href: "/settings" },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:block">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="space-y-6">
          {/* Logo / Brand */}
          <div className="px-2 py-1">
            <span className="text-xl font-bold tracking-tight text-sidebar-foreground">
              SaaSify Analytics
            </span>
          </div>

          {/* Navigazione */}
          <nav className="space-y-1">
            {sidebarItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Profilo Utente in basso */}
        <div className="border-t border-sidebar-border pt-4">
          <div className="flex items-center gap-3 px-2">
            <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center font-bold text-sm text-muted-foreground">
              FE
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-none text-sidebar-foreground">
                Dev User
              </span>
              <span className="text-xs text-muted-foreground">
                dev@example.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
