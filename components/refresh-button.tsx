'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { ErrorBoundary } from '@highlight-run/react';

export default function RefreshButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <ErrorBoundary>
      <button
        className={`${
          isPending ? 'cursor-not-allowed text-gray-400' : ''
        } text-sm text-gray-500 hover:text-gray-900`}
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            router.refresh()
          })
        }}
      >
        {isPending ? 'Refreshing...' : 'Refresh'}
      </button>
    </ErrorBoundary>
  )
}
