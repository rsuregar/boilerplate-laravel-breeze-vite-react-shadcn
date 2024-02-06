import { ModeToggle } from '@/shadcn/components/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/ui/avatar'
import { Button } from '@/shadcn/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu'
import { Link } from '@inertiajs/react'
import { LogOutIcon as LogOut, UserCircle as User } from 'lucide-react'

export const Header = (props: any) => {
    const { user } = props
    return (
        <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>
                        <a
                            href={route('dashboard')}
                            className="flex ms-2 md:me-24"
                        >
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8 me-3"
                                alt="Logo Sekolah"
                            />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                Nama Sekolah
                            </span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center me-3">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="relative h-9 w-9 rounded-full"
                                    >
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage
                                                src={user?.image ?? ''}
                                                alt={user?.name ?? ''}
                                            />
                                            <AvatarFallback>
                                                {user?.name?.[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-56"
                                    align="end"
                                    forceMount
                                >
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {user?.name}
                                            </p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {user?.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Link href={route('profile.edit')}>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className='cursor-pointer'>
                                            <User className='me-1 h-4'/> Profile
                                            <DropdownMenuShortcut>
                                                ⇧⌘P
                                            </DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    </Link> 
                                    <DropdownMenuSeparator />
                                    <Link href={route('logout')} method='post'>
                                    <DropdownMenuItem className='cursor-pointer'>
                                    <LogOut className='me-1 h-4'/> Log out
                                        <DropdownMenuShortcut>
                                            ⇧⌘Q
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}
