import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => (
  <Marquee className="bg-[#E3AD55] py-5" speed={100} gradient={false} pauseOnHover={true}>
    <span>
      {' '}
      New Arrivals: [Tile Name] | Weekly Feature: Modern Geometric Patterns | Join the
      Community.{' '}
    </span>
  </Marquee>
);

export default MarqueeComponent;
