import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Vintage Pop Art T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Clothing",
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Retro Comic Book Poster",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    category: "Art",
    isNew: true
  },
  {
    id: 3,
    name: "Funky Sunglasses",
    price: 19.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Accessories",
    isSale: true
  },
  {
    id: 4,
    name: "Pop Art Canvas Print",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=400&fit=crop",
    category: "Art"
  },
  {
    id: 5,
    name: "Colorful Bomber Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Clothing",
    isNew: true
  }
];

export function ProductGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-pop-yellow/5 to-pop-pink/5 relative">
      <div className="absolute inset-0 halftone opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bangers text-5xl md:text-6xl text-pop-pink mb-4 transform rotate-1">
            FEATURED PRODUCTS
          </h2>
          <p className="font-comic text-xl text-foreground max-w-2xl mx-auto">
            Check out our <span className="text-pop-orange font-bold">HOTTEST</span> items 
            that everyone is talking about!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="font-bangers text-2xl text-pop-orange hover:text-pop-pink transition-colors underline decoration-wavy decoration-4 underline-offset-8">
            VIEW ALL PRODUCTS →
          </button>
        </div>
      </div>
    </section>
  );
}