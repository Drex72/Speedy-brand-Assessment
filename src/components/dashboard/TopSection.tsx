import {
    AudioIcon,
    DollarLineIcon,
    GroupIcon,
    UserCircleIcon,
    VideoIcon,
} from '@/icons';
import KpiCard, { KPICardProps } from '../ui/kpicard';

const TopSection = () => {
    const iconStyles = 'size-6 text-gray-800 dark:text-white/90';

    const kpiData: KPICardProps[] = [
        {
            icon: <GroupIcon className={iconStyles} />,
            label: 'Total Users',
            value: '120,000',
            percentageChange: 5.2,
            percentageChangeType: 'positive',
        },
        {
            icon: <UserCircleIcon className={iconStyles} />,
            label: 'Active Users',
            value: '85,000',
            percentageChange: 3.8,
            percentageChangeType: 'positive',
        },
        {
            icon: <VideoIcon className={iconStyles} />,
            label: 'Total Streams',
            value: '3,200,000',
            percentageChange: -2.5,
            percentageChangeType: 'negative',
        },
        {
            icon: <DollarLineIcon className={iconStyles} />,
            label: 'Revenue',
            value: '$1,200,000',
            percentageChange: 4.1,
            percentageChangeType: 'positive',
        },
        {
            icon: <AudioIcon className={iconStyles} />,
            label: 'Top Artist',
            value: 'Drake',
            percentageChange: 6.7,
            percentageChangeType: 'positive',
        },
    ];
    return (
        <div className="col-span-12 space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 md:gap-6">
                {kpiData.map((card, index) => (
                    <KpiCard key={index} {...card} />
                ))}
               
            </div>

        </div>
    );
};

export default TopSection;
