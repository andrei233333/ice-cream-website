import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  ingredients: string;
  health_benefits: string;
  nutrition_facts: string;
}

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, user: "Sarah M.", rating: 5, comment: "Absolutely delicious! The carrot flavor is surprisingly sweet and refreshing.", date: "2024-02-15" },
    { id: 2, user: "John D.", rating: 4, comment: "Great texture and natural taste. Will definitely try other flavors.", date: "2024-02-10" }
  ]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost/website/Nutriscoop/api/products.php?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        console.log('Fetched product:', data);
        setProduct(data[0] || null);
      } catch (error) {
        console.error("Error details:", error);
        toast({
          title: "Error",
          description: "Failed to load product. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, toast]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!review.trim()) return;

    const newReview = {
      id: reviews.length + 1,
      user: "You",
      rating: 5,
      comment: review,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReview, ...reviews]);
    setReview("");
    toast({
      title: "Success",
      description: "Thank you for your review!",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-nutri-beige flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <Skeleton className="h-96 w-full" />
              <div className="p-6 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-nutri-beige flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
            <Link to="/products">
              <Button>Return to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nutri-beige flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-nutri-green hover:text-nutri-green/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-96 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-nutri-green text-white px-3 py-1 rounded-full text-sm font-medium">
                Ice Cream
              </div>
            </div>
            <div className="p-6 flex flex-col">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className="h-5 w-5" 
                      fill={i < 4 ? "currentColor" : "none"} 
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-2">4.0 (24 reviews)</span>
              </div>
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
                  <p className="text-gray-600">{product.ingredients}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Health Benefits</h3>
                  <p className="text-gray-600">{product.health_benefits}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Nutrition Facts</h3>
                  <p className="text-gray-600">{product.nutrition_facts}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 mr-2 text-nutri-green" />
              Customer Reviews
            </h2>

            {/* Review Form */}
            <form onSubmit={handleReviewSubmit} className="mb-8">
              <Textarea
                placeholder="Share your thoughts about this flavor..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="mb-4"
                rows={4}
              />
              <Button type="submit" className="bg-nutri-green hover:bg-nutri-green/90">
                Submit Review
              </Button>
            </form>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className="h-4 w-4" 
                            fill={i < review.rating ? "currentColor" : "none"} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">{review.user}</span>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
