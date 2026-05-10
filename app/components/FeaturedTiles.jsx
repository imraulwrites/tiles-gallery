import CardComponent from './Card';

async function FeaturedTiles() {
  const data = await fetch('https://tiles-gallery-server-fowg.onrender.com/featured');

  const result = await data.json();

  console.log(result);

  return (
    <div className="bg-[#232323] pb-20 px-6">
      <h2 className="text-gray-100 text-3xl py-4">Featured Tiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {result.map((item, id) => (
          <CardComponent key={id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedTiles;
