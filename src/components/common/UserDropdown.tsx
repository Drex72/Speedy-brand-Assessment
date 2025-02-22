'use client';
import {
    ChevronDownIcon,
    InfoIcon,
    SettingsIcon,
    SignoutIcon,
    UserCircleIcon,
} from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Dropdown } from '../ui/dropdown/Dropdown';
import { DropdownItem } from '../ui/dropdown/DropdownItem';

export default function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    }

    function closeDropdown() {
        setIsOpen(false);
    }
    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="dropdown-toggle flex items-center text-gray-700 dark:text-gray-400"
            >
                <span className="mr-3 h-11 w-11 overflow-hidden rounded-full">
                    <Image
                        width={44}
                        height={44}
                        src="/images/user/owner.jpg"
                        alt="User"
                    />
                </span>

                <span className="mr-1 block text-theme-sm font-medium">
                    Musharof
                </span>

                <ChevronDownIcon
                    className={`stroke-gray-500 transition-transform duration-200 dark:stroke-gray-400 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
            >
                <div>
                    <span className="block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                        Admin
                    </span>
                    <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
                        johndoe@gmail.com
                    </span>
                </div>

                <ul className="flex flex-col gap-1 border-b border-gray-200 pb-3 pt-4 dark:border-gray-800">
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            tag="a"
                            href="#"
                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            <UserCircleIcon />
                            Edit profile
                        </DropdownItem>
                    </li>
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            tag="a"
                            href="#"
                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            <SettingsIcon />
                            Account settings
                        </DropdownItem>
                    </li>
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            tag="a"
                            href="#"
                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            <InfoIcon />
                            Support
                        </DropdownItem>
                    </li>
                </ul>
                <Link
                    href="#"
                    className="group mt-3 flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                    <SignoutIcon />
                    Sign out
                </Link>
            </Dropdown>
        </div>
    );
}
