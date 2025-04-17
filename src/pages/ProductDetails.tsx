import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Heart, Sparkles, Shield, Apple } from "lucide-react";
import { products } from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id_product === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-nutri-beige flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nutri-beige flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image Section */}
            <div className="relative group">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="bg-nutri-green/90 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-sm">
                  <Leaf className="h-4 w-4" />
                  100% Vegan
                </div>
                <div className="bg-nutri-orange/90 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-sm">
                  <Heart className="h-4 w-4" />
                  Healthy Choice
                </div>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="space-y-8">
              {/* Title and Description */}
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h1 className="text-4xl font-bold text-nutri-green mb-6">{product.name}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md">
                  <Sparkles className="h-8 w-8 text-nutri-orange mx-auto mb-3" />
                  <h3 className="font-semibold text-nutri-green">Premium Quality</h3>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md">
                  <Shield className="h-8 w-8 text-nutri-orange mx-auto mb-3" />
                  <h3 className="font-semibold text-nutri-green">Natural Ingredients</h3>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md">
                  <Apple className="h-8 w-8 text-nutri-orange mx-auto mb-3" />
                  <h3 className="font-semibold text-nutri-green">Health Benefits</h3>
                </div>
              </div>

              {/* Ingredients */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-nutri-orange mb-5 flex items-center gap-2">
                  <Sparkles className="h-6 w-6" />
                  Natural Ingredients
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">{product.ingredients}</p>
              </div>

              {/* Health Benefits */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-nutri-orange mb-5 flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Health Benefits
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">{product.health_benefits}</p>
              </div>

              {/* Nutrition Facts */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-nutri-orange mb-5 flex items-center gap-2">
                  <Apple className="h-6 w-6" />
                  Nutrition Facts
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {product.nutrition_facts.split(', ').map((fact, index) => (
                    <div key={index} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                      <p className="text-gray-600 font-medium">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails; 