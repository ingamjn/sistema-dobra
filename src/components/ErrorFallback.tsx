'use client';

import type { FC } from 'react';

type ErrorFallbackProps = {
  error: Error;
  reset: () => void;
};

const ErrorFallback: FC<ErrorFallbackProps> = ({ error, reset }) => {
  return (
    <main className="flex min-h-screen items-center justify-center p-8 text-center bg-white">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-800 mb-2">{error.message}</p>
        <pre className="text-sm text-gray-500 overflow-x-auto mb-4">
          {error.stack}
        </pre>
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try again
        </button>
      </div>
    </main>
  );
};

export default ErrorFallback;
