import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import Badge from '../badge/Badge';

export interface KPICardProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    percentageChange: number;
    percentageChangeType: 'negative' | 'positive';
}

const KpiCard = (props: KPICardProps) => {
    const { icon, label, percentageChange, percentageChangeType, value } =
        props;

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                {icon}
            </div>

            <div className="mt-5 flex items-end justify-between">
                <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {label}
                    </span>
                    <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
                        {value}
                    </h4>
                </div>
                <Badge
                    color={
                        percentageChangeType === 'positive'
                            ? 'success'
                            : 'error'
                    }
                >
                    {percentageChangeType === 'positive' && <ArrowUpIcon />}
                    {percentageChangeType === 'negative' && (
                        <ArrowDownIcon className="text-error-500" />
                    )}
                    {percentageChange}%
                </Badge>
            </div>
        </div>
    );
};

export default KpiCard;
