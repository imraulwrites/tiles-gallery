'use client';

import React, { useEffect, useState } from 'react';
import CardComponent from '../components/Card';

function AllTilesPages() {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://tiles-gallery-server-fowg.onrender.com/products');
        const result = await data.json();
        if (result) {
          setProducts(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = e => {
    setSearchValue(e.target.value);
  };

  const filteredList = products.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="bg-[#232323] pb-20 px-6">
        <h2 className="text-white text-3xl py-4">All Tiles</h2>

        <div className="py-4">
          <input
            type="text"
            placeholder="type your query ..."
            value={searchValue}
            onChange={handleSearch}
            className="border border-gray-400 text-gray-200 rounded-lg px-4 py-1 outline-none"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredList?.map((item, id) => (
            <CardComponent key={id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllTilesPages;
