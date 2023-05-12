'use client'

import { useState, useEffect } from 'react';
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import ReloadButton from './reload-button'

export default function ClientTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [duration, setDuration] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

    const loadData = () => {
        let startTime = Date.now();
        setLoading(true);
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users)
                setDuration(Date.now() - startTime)
                setLoading(false)
            })
    }

    useEffect(() => {
        loadData();
    }, [])

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration}ms
          </p>
        </div>
        <ReloadButton onClick={loadData} loading={loading} />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user) => (
          <div
            key={user.name}
            className="flex items-center justify-between py-3"
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
        ))}
      </div>
    </div>
  )
}
