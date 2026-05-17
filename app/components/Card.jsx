import { CircleDollar } from '@gravity-ui/icons';
import { Avatar, Button, Card, CloseButton } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

function CardComponent({ data }) {
  const { id, title, image } = data;
  return (
    <div className="relative rounded-sm text-foreground">
      <div className="aspect-square overflow-hidden p-2 rounded-md">
        {/* <img className="w-full h-full object-cover object-center rounded-sm" src={image} alt="" /> */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="
        (max-width: 480px) 100vw,
        (max-width: 768px) 50vw,
        (max-width: 1280px) 33vw,
        400px
        "
          className="object-cover object-center rounded-md"
        />
      </div>

      <div className="p-4 absolute bottom-3 flex justify-between items-center w-full">
        <div className="flex lg:flex-col lg:w-fit lg:gap-1 justify-between w-full">
          <h3 className="bg-gray-200/20 shadow-md px-4 py-2 rounded-sm text-base">{title}</h3>
          <Link
            className="bg-gray-200/70 hover:bg-gray-200/80 shadow-md px-4 py-2 rounded-sm text-base"
            href={`/tiles/${id}`}
          >
            Details Button
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
