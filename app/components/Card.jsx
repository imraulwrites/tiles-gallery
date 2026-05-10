import { CircleDollar } from '@gravity-ui/icons';
import { Avatar, Button, Card, CloseButton } from '@heroui/react';
import Link from 'next/link';

function CardComponent({ data }) {
  const { id, title, image } = data;
  return (
    <div className="bg-background/90 relative rounded-sm text-foreground ">
      <div className="aspect-square overflow-hidden p-2">
        <img className="w-full h-full object-cover object-center rounded-sm" src={image} alt="" />
      </div>

      <div className="p-4">
        <h3 className="pb-3 w-fit rounded-sm ">{title}</h3>
        <div className="flex justify-end">
          <p className="bg-gray-200/50  shadow-md px-4 py-2 w-fit rounded-sm">
            <Link href={`/tiles/${id}`}>Details Button</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
