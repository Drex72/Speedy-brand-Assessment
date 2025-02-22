'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback } from 'react';
import { useSidebar } from '../context/SidebarContext';
import { GridIcon, HorizontaLDots } from '../icons/index';

type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
};

const navItems: NavItem[] = [
    {
        icon: <GridIcon />,
        name: 'Dashboard',
        path: '/',
    },
];

const AppSidebar: React.FC = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const pathname = usePathname();

    const renderMenuItems = (navItems: NavItem[]) => (
        <ul className="flex flex-col gap-4">
            {navItems.map((nav) => (
                <li key={nav.name}>
                    {nav.path && (
                        <Link
                            href={nav.path}
                            className={`menu-item group ${
                                isActive(nav.path)
                                    ? 'menu-item-active'
                                    : 'menu-item-inactive'
                            }`}
                        >
                            <span
                                className={`${
                                    isActive(nav.path)
                                        ? 'menu-item-icon-active'
                                        : 'menu-item-icon-inactive'
                                }`}
                            >
                                {nav.icon}
                            </span>
                            {(isExpanded || isHovered || isMobileOpen) && (
                                <span className={`menu-item-text`}>
                                    {nav.name}
                                </span>
                            )}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );

    const isActive = useCallback(
        (path: string) => path === pathname,
        [pathname]
    );

    return (
        <aside
            className={`fixed left-0 top-0 z-50 mt-16 flex h-screen flex-col border-r border-gray-200 bg-white px-5 text-gray-900 transition-all duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900 lg:mt-0 ${
                isExpanded || isMobileOpen
                    ? 'w-[290px]'
                    : isHovered
                      ? 'w-[290px]'
                      : 'w-[90px]'
            } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-start py-8">Logo</div>
            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2
                                className={`mb-4 flex text-xs uppercase leading-[20px] text-gray-400 ${
                                    !isExpanded && !isHovered
                                        ? 'lg:justify-center'
                                        : 'justify-start'
                                }`}
                            >
                                {isExpanded || isHovered || isMobileOpen ? (
                                    'Menu'
                                ) : (
                                    <HorizontaLDots />
                                )}
                            </h2>
                            {renderMenuItems(navItems)}
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default AppSidebar;
