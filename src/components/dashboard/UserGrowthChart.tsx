'use client';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import ChartTab from '../common/ChartTab';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

export default function UserGrowthChart() {
    const options: ApexOptions = {
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
        },
        colors: ['#4F46E5', '#10B981'],
        chart: {
            fontFamily: 'Outfit, sans-serif',
            height: 310,
            type: 'line',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: [2, 2],
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
            },
        },
        markers: {
            size: 3,
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
                size: 6,
            },
        },
        grid: {
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
            x: {
                format: 'MMM yyyy',
            },
        },
        xaxis: {
            type: 'category',
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px',
                    colors: ['#6B7280'],
                },
            },
            title: {
                text: 'Users',
                style: {
                    fontSize: '14px',
                },
            },
        },
    };

    const series = [
        {
            name: 'Total Users',
            data: [
                1000, 1200, 1500, 1800, 2200, 2500, 2800, 3200, 3600, 4000,
                4500, 5000,
            ],
        },
        {
            name: 'Active Users',
            data: [
                800, 950, 1100, 1400, 1700, 1900, 2100, 2500, 2800, 3100, 3500,
                3900,
            ],
        },
    ];

    return (
        <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
            <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:justify-between">
                <div className="w-full">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        User Growth
                    </h3>
                    <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
                        Growth in total users and active users over the past 12
                        months
                    </p>
                </div>
                <div className="flex w-full items-start gap-3 sm:justify-end">
                    <ChartTab />
                </div>
            </div>

            <div className="custom-scrollbar max-w-full overflow-x-auto">
                <div className="min-w-[1000px] xl:min-w-full">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="line"
                        height={310}
                    />
                </div>
            </div>
        </div>
    );
}
