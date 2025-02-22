'use client';
import React from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

export default function RevenueDistributionChart() {
    // Example revenue breakdown values (you can adjust these dynamically)
    const series = [70, 30]; // e.g., 70% from Subscriptions, 30% from Ads

    const options: ApexOptions = {
        // colors: ['#465fff'],

        chart: {
            fontFamily: 'Outfit, sans-serif',
            type: 'pie',
            height: 180,
            toolbar: { show: false },
        },
        labels: ['Subscriptions', 'Ads'],
        colors: ['#465FFF', '#28C76F'],
        legend: {
            position: 'bottom',
        },
        dataLabels: { enabled: false },

        tooltip: {
            y: {
                formatter: (value) => `$${value}k`, // example: display as $70k, $30k
            },
        },
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
                Revenue Distribution
            </h3>
            <ReactApexChart
                options={options}
                series={series}
                type="pie"
                height={350}
            />
        </div>
    );
}
