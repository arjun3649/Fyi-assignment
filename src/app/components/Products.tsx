import { products } from "../Utils/CardsList";
import Cards from "./Cards";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {products.map((item) => (
          <Cards
            key={item.id} // Assuming each item in 'flat' already has an 'id'
            product={item} // Pass the entire item as the product
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
