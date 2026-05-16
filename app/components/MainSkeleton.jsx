import React from 'react';
import { Skeleton } from '@heroui/react';


export default function MainSkeleton() {
  return (
    <div className="grid w-full md:w-[60vw] grid-cols-1 min-h-[60vh] px-10 my-10 mx-auto">
      <div className="space-y-2">
        <p className="truncate text-xs text-muted">Loading...</p>
        <div className="shadow-panel space-y-3 rounded-lg bg-gray-100 p-4">
          <Skeleton animationType="shimmer" className="h-20 rounded-lg" />
          <Skeleton animationType="shimmer" className="h-3 w-3/5 rounded-lg" />
          <Skeleton animationType="shimmer" className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
