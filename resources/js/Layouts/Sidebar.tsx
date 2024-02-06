import { DashboardAdminNav } from '@/Routes/admin'

export default function Sidebar() {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-slate-900/75 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-slate-900/75">
                <DashboardAdminNav />
            </div>
        </aside>
    )
}
