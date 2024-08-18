import React from 'react'
import { house } from '../Utils/CardsList';
import Cards from './Cards';

const Houses = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {house.map((item,key) => (
          <Cards
            key={key}
            img={
              "https://psgroup.in/blog/wp-content/uploads/2021/01/Navyom-Living-dining.jpg"
            }
            title={item.title}
            price={item.price}
            address={item.address}
            size={item.size}
            number={item.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
}

export default Houses
