'use client'

import React from 'react';
import { ErrorBoundary } from '@highlight-run/react';

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    loading: boolean;
}

export default function RefreshButton({ onClick, loading }: Props) {
  return (
    <ErrorBoundary>
      <button
          className={`${
              loading ? 'cursor-not-allowed text-gray-400' : ''
          } text-sm text-gray-500 hover:text-gray-900`}
        onClick={onClick}
      >
          {loading ? 'Refreshing...' : 'Refresh'}
      </button>
    </ErrorBoundary>
  )
}
