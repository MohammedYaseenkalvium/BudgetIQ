import { UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

interface MenuItem {
  name: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { name: "Overview", path: "/dashboard" },
  { name: "Expenses", path: "/dashboard/expenses" },
  { name: "Analytics", path: "/dashboard/analytics" },
  { name: "Settings", path: "/dashboard/settings" },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold text-green-400 mb-10">BudgetIQ</h1>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item: MenuItem) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-green-500 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
}
