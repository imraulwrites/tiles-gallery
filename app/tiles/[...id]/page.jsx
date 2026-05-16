import Image from 'next/image';
import { Suspense } from 'react';
import MainSkeleton from '../../components/MainSkeleton';

async function TilesPage(props) {
  const { id } = await props.params;
  let tilesDetails;
  try {
    const data = await fetch('https://tiles-gallery-server-fowg.onrender.com/products');
    const result = await data.json();

    console.log('result from', result);

    tilesDetails = result.filter(item => item.id == id);

    console.log(tilesDetails);
  } catch (error) {
    throw new Error('Data fetching failed.');
  }

  const { title, description, image, price, material, inStock } = tilesDetails[0];

  return (
    <div className="col-span-12 flex h-auto flex-col sm:flex-row gap-6 py-10 px-6">
      <div className="aspect-square relative overflow-hidden rounded-2xl flex flex-1 border-2">
        <Image src={image} alt={title} fill sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold pb-4">{title}</h1>
          <p className="text-2xl pb-2">{description}</p>
          <p className="text-lg pb-2">Available: {inStock ? 'Yes' : 'Stock Out'}</p>
          <p className="text-base px-3 py-2 bg-gray-400 w-fit rounded-full">{material}</p>
        </div>
      </div>
    </div>
  );
}

export default TilesPage;
