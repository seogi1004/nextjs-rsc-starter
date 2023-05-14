export interface Props {
    children: JSX.Element;
    userCount: number;
    duration: number;
}

export default function TableHead({ children, userCount, duration }: Props) {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="space-y-1">
                <h2 className="text-xl font-semibold">Recent Users</h2>
                <p className="text-sm text-gray-500">
                    Fetched {userCount} users in {duration}ms
                </p>
            </div>
            {children}
        </div>
    )
}