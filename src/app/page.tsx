'use client';
import QuarterlyUserTarget from '@/components/dashboard/QuarterlyUserTarget';
import RecentStreams from '@/components/dashboard/RecentStreams';
import RevenueDistributionChart from '@/components/dashboard/RevenueDistribution';
import TopFiveStreamedSongs from '@/components/dashboard/TopFiveStreamedSongs';
import TopSection from '@/components/dashboard/TopSection';
import UserGrowthChart from '@/components/dashboard/UserGrowthChart';
import { useSidebar } from '@/context/SidebarContext';
import AppHeader from '@/layout/AppHeader';
import AppSidebar from '@/layout/AppSidebar';
import Backdrop from '@/layout/Backdrop';

export default function Dashboard() {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    const mainContentMargin = isMobileOpen
        ? 'ml-0'
        : isExpanded || isHovered
          ? 'lg:ml-[290px]'
          : 'lg:ml-[90px]';

    return (
        <div className="min-h-screen xl:flex">
            <AppSidebar />

            <Backdrop />
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
            >
                <AppHeader />
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6">
                    <div className="grid grid-cols-12 gap-4 md:gap-6">
                        <TopSection />

                        <div className="col-span-12 xl:col-span-4">
                            <TopFiveStreamedSongs />
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <QuarterlyUserTarget />
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <RevenueDistributionChart />
                        </div>

                        <div className="col-span-12">
                            <UserGrowthChart />
                        </div>

                        <div className="col-span-12">
                            <RecentStreams />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
