'use client'

import type { User } from "@/lib/service";
import { timeAgo } from "@/lib/utils";
import Image from "next/image";

export interface Props {
    user: User
}

export default function TableRow({ user }: Props) {
    const onClickRow = () => {
        alert(user.name);
    }

    return (
        <div
            key={user.name}
            className="flex items-center justify-between py-3"
            onClick={onClickRow}
        >
            <div className="flex items-center space-x-4">
                <Image
                    src={user.image}
                    alt={user.name}
                    width={48}
                    height={48}
                    className="rounded-full ring-1 ring-gray-900/5"
                />
                <div className="space-y-1">
                    <p className="font-medium leading-none">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </div>
            <p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>
        </div>
    )
}