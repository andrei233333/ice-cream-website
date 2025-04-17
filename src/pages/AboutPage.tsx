import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Heart, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-nutri-beige flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-nutri-dark">Our Story</h1>
            <div className="w-24 h-1 bg-nutri-orange mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the journey of NutriScoop, where passion for healthy living meets delicious vegan ice cream.
            </p>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-nutri-green/10 p-4 rounded-full mr-4">
                <Users className="h-8 w-8 text-nutri-green" />
              </div>
              <h2 className="text-3xl font-bold text-nutri-dark">Our Company</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                NutriVal Company was established on February 7, 2025, a partnership formed by ten young adults who desire to be successful entrepreneurs. The "Nutri" was derived from the word "Nutrition" which signifies the consumption and utilization of nutritious foods to support growth, energy production, and overall well-being. Meanwhile, "Val" comes from "Valenzuela City", the hometown of these young entrepreneurs.
              </p>
            </div>
          </div>

          {/* Store Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-nutri-orange/10 p-4 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-nutri-orange" />
                </div>
                <h2 className="text-3xl font-bold text-nutri-dark">Our Store</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                NutriScoop is a vegan ice cream store dedicated to providing delicious, dairy-free frozen treats made with the finest plant-based ingredients. Our store offers a welcoming atmosphere where customers can enjoy our unique flavors while supporting a sustainable and healthy lifestyle.
              </p>
            </div>
            
            {/* Store Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
              <img 
                src="/images/store-front.jpg" 
                alt="NutriScoop Store Front" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-nutri-green/10 p-4 rounded-full mr-4">
                  <Leaf className="h-8 w-8 text-nutri-green" />
                </div>
                <h2 className="text-3xl font-bold text-nutri-dark">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To value customers with an exciting and one-of-a-kind ice cream experience, while promoting healthy and nutritious options that benefit our community. We strive to make vegan ice cream accessible and enjoyable for everyone, regardless of dietary preferences.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-nutri-orange/10 p-4 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-nutri-orange" />
                </div>
                <h2 className="text-3xl font-bold text-nutri-dark">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the go-to brand for vegan ice cream, offering a variety of flavors that make it easy for people to make healthier, more sustainable choices. Our goal is to become one of the healthiest and most affordable ice cream options in the community, bringing joy to dessert lovers everywhere while making a positive impact on the world.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-nutri-dark mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-nutri-beige/50 p-6 rounded-xl text-center transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-nutri-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-nutri-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nutri-dark">Quality</h3>
                <p className="text-gray-700">We use only the finest plant-based ingredients to create our delicious ice cream.</p>
              </div>
              <div className="bg-nutri-beige/50 p-6 rounded-xl text-center transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-nutri-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-nutri-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nutri-dark">Sustainability</h3>
                <p className="text-gray-700">We're committed to environmentally friendly practices and sustainable sourcing.</p>
              </div>
              <div className="bg-nutri-beige/50 p-6 rounded-xl text-center transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-nutri-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-nutri-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nutri-dark">Community</h3>
                <p className="text-gray-700">We believe in building strong relationships with our customers and community.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 