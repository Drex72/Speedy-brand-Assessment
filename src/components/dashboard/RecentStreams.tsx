import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from '../ui/table';

interface Stream {
    id: number; 
    songName: string; 
    artist: string; 
    dateStreamed: string; 
    streamCount: number;
    userId: string; 
    coverImage: string; 
}

const tableData: Stream[] = [
    {
        id: 1,
        songName: 'Blinding Lights',
        artist: 'The Weeknd',
        dateStreamed: '2025-02-20',
        streamCount: 320,
        userId: 'USR1234',
        coverImage: '/images/product/product-01.jpg',
    },
    {
        id: 2,
        songName: 'Watermelon Sugar',
        artist: 'Harry Styles',
        dateStreamed: '2025-02-19',
        streamCount: 210,
        userId: 'USR5678',
        coverImage: '/images/product/product-01.jpg',
    },
    {
        id: 3,
        songName: 'Save Your Tears',
        artist: 'The Weeknd',
        dateStreamed: '2025-02-18',
        streamCount: 150,
        userId: 'USR9101',
        coverImage: '/images/product/product-01.jpg',
    },
    {
        id: 4,
        songName: 'Levitating',
        artist: 'Dua Lipa',
        dateStreamed: '2025-02-17',
        streamCount: 275,
        userId: 'USR1122',
        coverImage: '/images/product/product-01.jpg',
    },
];

export default function RecentStreams() {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Recent Streams
                </h3>
            </div>
            <div className="max-w-full overflow-x-auto">
                <Table>
                    {/* Table Header */}
                    <TableHeader className="border-y border-gray-100 dark:border-gray-800">
                        <TableRow>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                Song Name
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                Artist
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                Date Streamed
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                Stream Count
                            </TableCell>
                            <TableCell
                                isHeader
                                className="py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                            >
                                User ID
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {tableData.map((stream) => (
                            <TableRow key={stream.id}>
                                <TableCell className="py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                                            <Image
                                                width={50}
                                                height={50}
                                                src={stream.coverImage}
                                                className="h-[50px] w-[50px]"
                                                alt={stream.songName}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                                                {stream.songName}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                                    {stream.artist}
                                </TableCell>
                                <TableCell className="py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                                    {stream.dateStreamed}
                                </TableCell>
                                <TableCell className="py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                                    {stream.streamCount}
                                </TableCell>
                                <TableCell className="py-3 text-theme-sm text-gray-500 dark:text-gray-400">
                                    {stream.userId}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
