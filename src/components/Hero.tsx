import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFE4C4]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Top Drip Pattern */}
        <div className="absolute inset-x-0 top-0 h-64 bg-[url('/images/ice-cream-drip.png')] bg-repeat-x bg-contain"></div>
        
        {/* Waffle Pattern */}
        <div className="absolute inset-0 bg-[url('/images/waffle-pattern.png')] bg-repeat opacity-10"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#98D8C6]/30 via-transparent to-[#FFE4C4]/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-nutri-green/20 shadow-lg">
            <Leaf className="h-5 w-5 text-nutri-green" />
            <span className="text-nutri-green font-medium">100% Plant-Based Ice Cream</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight animate-fade-up">
            <span className="block text-nutri-green drop-shadow-lg">
              NutriScoop
            </span>
            <span className="block text-3xl md:text-4xl mt-4 text-nutri-orange font-semibold drop-shadow">
              Healthy & Delicious Ice Cream
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            Indulge in our creamy, dairy-free ice cream made with the finest plant-based ingredients. 
            Perfect for vegans and ice cream lovers alike!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/products">
              <Button 
                className="bg-nutri-orange hover:bg-nutri-orange/90 text-white px-8 py-6 text-lg rounded-full group shadow-xl shadow-nutri-orange/20 hover:shadow-nutri-orange/30 transition-all duration-300"
              >
                View Our Flavors
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="bg-white/90 border-2 border-nutri-green text-nutri-green hover:bg-nutri-green hover:text-white px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sprinkles Pattern */}
      <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
        <div className="h-full w-full bg-[url('/images/sprinkles-pattern.png')] bg-repeat opacity-10"></div>
      </div>
    </section>
  );
};

export default Hero;
