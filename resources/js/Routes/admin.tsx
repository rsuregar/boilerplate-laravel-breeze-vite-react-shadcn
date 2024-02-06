import { Dispatch, SetStateAction } from "react";
import { cn } from "@/shadcn/utils";
import { Home, UserCheck } from "lucide-react"
import { Link } from '@inertiajs/react'


interface AdminRoute {
    title: string;
    routeName: string;
    parentRoute?: string;
    icon?: React.ReactNode | string;
    disabled?: boolean;
}

export const adminRoutes: AdminRoute[] = [
    {
        title: 'Dashboard',
        routeName: 'dashboard',
        parentRoute: 'dashboard',
        icon: <Home  className="h-5"/>,
    },
    {
        title: 'Profile',
        routeName: 'profile.edit',
        parentRoute: 'profile.*',
        icon: <UserCheck className="h-5"/>
    },
];

interface DashboardNavProps {
    setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardAdminNav({ setOpen }: DashboardNavProps) {
    const isActive = (path: string) => {
        return route().current(path);
    }

    if (!adminRoutes?.length) {
        return null;
    }

    return (
        <nav className="grid items-start gap-2">
      {adminRoutes.map((item, index) => {
        return (
          item.routeName && (
            <Link
              key={index}
              href={item.disabled ? "#" : route(item.routeName)}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-black dark:hover:text-white transition-all cursor-pointer",
                  isActive(`${item.parentRoute}`) ? "bg-gray-200 font-bold dark:text-white dark:bg-black" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.icon}
                <span className="ml-2">{item.title}</span> 
              </span>
            </Link>
          )
        );
      })}
    </nav>
    )
}