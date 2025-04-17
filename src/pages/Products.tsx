import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-nutri-beige flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-nutri-green">
              Our Ice Cream Collection
            </h1>
            <div className="w-24 h-1 bg-nutri-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of healthy and delicious plant-based ice cream flavors, 
              crafted with love and natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id_product} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-nutri-green/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 backdrop-blur-sm">
                      <Leaf className="h-4 w-4" />
                      Vegan
                    </div>
                    <div className="bg-nutri-orange/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 backdrop-blur-sm">
                      <Heart className="h-4 w-4" />
                      Healthy
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-nutri-green mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Serving Size</div>
                      <div className="font-medium">1 scoop</div>
                    </div>
                    <Link to={`/product/${product.id_product}`}>
                      <Button 
                        variant="outline" 
                        className="border-nutri-orange text-nutri-orange hover:bg-nutri-orange hover:text-white group"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
