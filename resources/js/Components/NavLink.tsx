import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-4 rounded-sm text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none' +
                (active
                    ? 'border-green-900 text-green-900 focus:border-green-700 dark:text-white dark:border-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-green-300 dark:text-white') +
                className
            }
        >
            {children}
        </Link>
    );
}
