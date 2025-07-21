'use client';

import React, { ReactNode } from 'react';
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-700 rounded">
      <p>Something went wrong:</p>
      <pre className="whitespace-pre-wrap">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 px-4 py-2 bg-red-700 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}

type Props = {
  children: ReactNode;
};

export default function ErrorBoundary({ children }: Props) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // You can reset state or reload data here
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
