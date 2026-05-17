'use client';

import { ErrorBoundary } from 'react-error-boundary';
import RefreshButton from './RefreshButton';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex flex-col gap-4 py-20 md:py-32 w-full min-h-[70vh]  text-center">
      <h2 className="text-2xl font-semibold">Something went Wrong!</h2>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <RefreshButton refresh={resetErrorBoundary} text="Refresh" />
        {/* <button
          className="bg-gray-200 text-sm border rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-300 duration-300 w-fit"
          onClick={resetErrorBoundary}
        >
          Refresh
        </button> */}
      </div>
    </div>
  );
}

export default function FeaturedTilesErrorBoundary({ children }) {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
}
