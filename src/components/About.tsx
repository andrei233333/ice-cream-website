import { Leaf, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-nutri-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We're passionate about creating delicious vegan ice cream that everyone can enjoy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-nutri-beige p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-nutri-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-nutri-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">100% Plant-Based</h3>
            <p className="text-gray-600">
              Made with the finest plant-based ingredients, our ice cream is completely dairy-free and vegan-friendly.
            </p>
          </div>

          <div className="bg-nutri-beige p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-nutri-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-nutri-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Made with Love</h3>
            <p className="text-gray-600">
              Each scoop is crafted with care, ensuring the perfect balance of flavor and creaminess.
            </p>
          </div>

          <div className="bg-nutri-beige p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-nutri-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-nutri-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              We use only the highest quality ingredients to create our delicious vegan ice cream flavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
