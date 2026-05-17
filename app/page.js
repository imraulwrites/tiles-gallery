import Banner from './components/Banner';
import MarqueeComponent from './components/Marquee';
import { Suspense } from 'react';

import FeaturedTilesErrorBoundary from './components/FeaturedTilesErrorBoundary';
import MainSkeleton from './components/MainSkeleton';
import FeaturedTiles from './components/FeaturedTiles';

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
