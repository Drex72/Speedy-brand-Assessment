'use client';
import { MoreDotIcon } from '@/icons';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Dropdown } from '../ui/dropdown/Dropdown';
import { DropdownItem } from '../ui/dropdown/DropdownItem';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

export default function TopFiveStreamedSongs() {
    const options: ApexOptions = {
        colors: ['#465fff'],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            type: 'bar',
            height: 180,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                borderRadius: 5,
                borderRadiusApplication: 'end',
            },
        },
        dataLabels: { enabled: false },
        stroke: {
            show: true,
            width: 4,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['The Weekend', 'Harry Styles', 'Dua Lipa', 'Future', 'Martin Garrix'],
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        legend: {
            show: false,
        },
        yaxis: {
            title: { text: 'Streams' },
        },
        grid: {
            yaxis: { lines: { show: true } },
        },
        fill: { opacity: 1 },
        tooltip: {
            y: {
                formatter: (val: number) => `${val} streams`,
            },
        },
    };

    const series = [
        {
            name: 'Streams',
            data: [12000, 9500, 8700, 7600, 6900], 
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function closeDropdown() {
        setIsOpen(false);
    }

    return (
        <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
            <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
                    Top 5 Streamed Songs over the past 30 days.
                </h3>

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
                            onItemClick={closeDropdown}
                            className="flex w-full rounded-lg text-left font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            View More
                        </DropdownItem>
                    </Dropdown>
                </div>
            </div>

            <div className="custom-scrollbar max-w-full overflow-x-auto">
                <div className="-ml-5 min-w-[450px] pl-2 xl:min-w-full">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
}
