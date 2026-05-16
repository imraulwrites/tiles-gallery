import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Banner from './components/Banner';
import MarqueeComponent from './components/Marquee';
import Error from './error';
import { Suspense } from 'react';
import FeaturedTiles from './@featured/page';
import FeaturedTilesErrorBoundary from './components/FeaturedTilesErrorBoundary';
import MainSkeleton from './components/MainSkeleton';

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeComponent />
      <FeaturedTilesErrorBoundary>
        <Suspense fallback={<MainSkeleton />}>
          <FeaturedTiles />
        </Suspense>
      </FeaturedTilesErrorBoundary>
    </div>
  );
}
