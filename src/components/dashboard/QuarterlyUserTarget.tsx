'use client';

import { ArrowDownIcon, ArrowUpIcon, MoreDotIcon } from '@/icons';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Dropdown } from '../ui/dropdown/Dropdown';
import { DropdownItem } from '../ui/dropdown/DropdownItem';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

export default function QuarterlyUserTarget() {
    const acquiredUsers = 4500;
    const expectedUsers = 6000;
    const progress = (acquiredUsers / expectedUsers) * 100;

    const series = [progress];
    const options: ApexOptions = {
        colors: ['#28C76F'],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            type: 'radialBar',
            height: 330,
            sparkline: { enabled: true },
        },
        plotOptions: {
            radialBar: {
                startAngle: -85,
                endAngle: 85,
                hollow: { size: '80%' },
                track: {
                    background: '#E4E7EC',
                    strokeWidth: '100%',
                    margin: 5,
                },
                dataLabels: {
                    name: { show: false },
                    value: {
                        fontSize: '36px',
                        fontWeight: '600',
                        offsetY: -40,
                        color: '#1D2939',
                        formatter: (val) => `${val.toFixed(1)}%`,
                    },
                },
            },
        },
        fill: { type: 'solid', colors: ['#28C76F'] },
        stroke: { lineCap: 'round' },
        labels: ['Users Acquired'],
    };

    const [isOpen, setIsOpen] = useState(false);
    function toggleDropdown() {
        setIsOpen(!isOpen);
    }
    function closeDropdown() {
        setIsOpen(false);
    }

    return (
        <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="shadow-default rounded-2xl bg-white px-5 pb-11 pt-5 dark:bg-gray-900 sm:px-6 sm:pt-6">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                            Quarterly User Acquisition Target
                        </h3>
                        <p className="mt-1 text-theme-sm font-normal text-gray-500 dark:text-gray-400">
                            Number of users acquired vs. expected
                        </p>
                    </div>
                    <div className="relative inline-block">
                        <button
                            onClick={toggleDropdown}
                            className="dropdown-toggle"
                        >
                            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
                        </button>
                        <Dropdown
                            isOpen={isOpen}
                            onClose={closeDropdown}
                            className="w-40 p-2"
                        >
                            <DropdownItem
                                tag="a"
                                onItemClick={closeDropdown}
                                className="flex w-full rounded-lg text-left font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                            >
                                View Details
                            </DropdownItem>
                            <DropdownItem
                                tag="a"
                                onItemClick={closeDropdown}
                                className="flex w-full rounded-lg text-left font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                            >
                                Adjust Target
                            </DropdownItem>
                        </Dropdown>
                    </div>
                </div>
                <div className="relative">
                    <div className="max-h-[330px]">
                        <ReactApexChart
                            options={options}
                            series={series}
                            type="radialBar"
                            height={330}
                        />
                    </div>
                    <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        {progress >= 100
                            ? 'Target Met!'
                            : `+${progress.toFixed(1)}%`}
                    </span>
                </div>
                <p className="mx-auto mt-10 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
                    {acquiredUsers} users acquired out of {expectedUsers}{' '}
                    expected.
                </p>
            </div>

            <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
                <div>
                    <p className="mb-1 text-center text-theme-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                        Target
                    </p>
                    <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                        {expectedUsers}
                        <ArrowDownIcon className="text-[#D92D20]" />
                    </p>
                </div>

                <div className="h-7 w-px bg-gray-200 dark:bg-gray-800"></div>

                <div>
                    <p className="mb-1 text-center text-theme-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                        Acquired
                    </p>
                    <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                        {acquiredUsers}
                        <ArrowUpIcon className="text-[#039855]" />
                    </p>
                </div>
            </div>
        </div>
    );
}
