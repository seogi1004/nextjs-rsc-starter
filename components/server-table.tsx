import { getUsers } from '@/lib/service';
import RefreshButton from './refresh-button'
import TableHead from './table-head';
import TableRow from './table-row';

export default async function ServerTable() {
  const startTime = Date.now()
  const users = await getUsers('server');
  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <TableHead userCount={users.length} duration={duration}>
        <RefreshButton />
      </TableHead>
      <div className="divide-y divide-gray-900/5">
        {users.map((user, index) => (
          <TableRow key={index} user={user}></TableRow>
        ))}
      </div>
    </div>
  )
}
