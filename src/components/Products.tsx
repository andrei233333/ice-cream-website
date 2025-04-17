import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart } from "lucide-react";
import { products } from "@/data/products";

const Products = () => {
  return (
    <section id="products" className="py-16 bg-nutri-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nutri-green">Our Ice Cream Collection</h2>
          <div className="w-16 h-1 bg-nutri-orange mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our unique plant-based ice cream flavors, 
            crafted with love and natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id_product}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <div className="bg-nutri-green/90 text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm">
                    <Leaf className="h-3 w-3" />
                    Vegan
                  </div>
                  <div className="bg-nutri-orange/90 text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm">
                    <Heart className="h-3 w-3" />
                    Healthy
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-nutri-green mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="space-y-0.5">
                    <div className="text-xs text-gray-500">Serving Size</div>
                    <div className="text-sm font-medium">1 scoop</div>
                  </div>
                  <Link to={`/product/${product.id_product}`}>
                    <button className="inline-flex items-center px-4 py-2 bg-nutri-orange text-white text-sm rounded-full font-medium hover:bg-nutri-orange/90 transition-colors duration-300 group">
                      Details
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-nutri-green rounded-full hover:bg-nutri-green/90 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Explore All Flavors
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
