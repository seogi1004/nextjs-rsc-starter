'use client'

import type { User } from '@/lib/service';
import { useState, useEffect } from 'react';
import ReloadButton from './reload-button'
import TableHead from './table-head';
import TableRow from '@/components/table-row';

export default function ClientTable() {
  const [users, setUsers] = useState<User[]>([]);
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
      <TableHead userCount={users.length} duration={duration}>
        <ReloadButton onClick={loadData} loading={loading} />
      </TableHead>
      <div className="divide-y divide-gray-900/5">
        {users.map((user, index) => (
          <TableRow key={index} user={user}></TableRow>
        ))}
      </div>
    </div>
  )
}
