import { PropsWithChildren, ReactNode } from 'react'
import { User } from '@/types'
import Sidebar from './Sidebar'
import { Header } from './Header'

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    
    return (
        <>
            <Header user={user} />
            <Sidebar />
           
            <main className="sm:ml-64 bg-gray-100">
            {header && (
                <header className="bg-white shadow dark:bg-slate-900">
                    <div className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
                {children}
            </main>
        </>
    )
}
