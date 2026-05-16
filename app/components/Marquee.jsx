import Marquee from 'react-fast-marquee';

export default async function MarqueeComponent() {
  let queue = ['Weekly Feature: Modern Geometric Patterns', 'Join the Community'];
  try {
    const data = await fetch('https://tiles-gallery-server-fowg.onrender.com/products');
    const result = await data.json();

    const title = result.map(item => {
      return `New Arrivals: ${item.title}`;
    });

    queue = [...title, ...queue];
  } catch (error) {
    // console.log(error);
  }

  return (
    <Marquee className="bg-[#E3AD55] py-5" speed={100} gradient={false} pauseOnHover={true}>
      {queue.map((item, id) => {
        return (
          <div key={id}>
            <span>{item}</span>
            <span className="mx-3">{'|'}</span>
          </div>
        );
      })}
    </Marquee>
  );
}
