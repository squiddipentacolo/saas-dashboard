import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  CreditCard,
  Package,
  Settings,
} from "lucide-react";

export const sidebarLinks = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Orders", url: "/dashboard/orders", icon: ShoppingCart },
  { title: "Customers", url: "/dashboard/customers", icon: Users },
  { title: "Subscriptions", url: "/dashboard/subscriptions", icon: CreditCard },
  { title: "Products", url: "/dashboard/products", icon: Package },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];
