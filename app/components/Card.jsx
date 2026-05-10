import { CircleDollar } from '@gravity-ui/icons';
import { Avatar, Button, Card, CloseButton } from '@heroui/react';
import Link from 'next/link';

function CardComponent({ data }) {
  const { id, title, image } = data;
  return (
    <div className="bg-background/90 relative w-fit rounded-sm text-foreground ">
      <div className="overflow-hidden w-fit p-2">
        <img className="h-[250px] sm:h-[300px] md:h-[350px] rounded-sm" src={image} alt="" />
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
