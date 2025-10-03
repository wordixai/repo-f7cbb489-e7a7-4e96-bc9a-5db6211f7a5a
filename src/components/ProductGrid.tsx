import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Loader2 } from "lucide-react";

export function ProductGrid() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-pop-yellow/5 to-pop-pink/5 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-pop-orange animate-spin mx-auto mb-4" />
              <p className="font-bangers text-2xl text-pop-orange">LOADING AWESOME PRODUCTS...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-pop-yellow/5 to-pop-pink/5 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="font-bangers text-2xl text-pop-red mb-4">OOPS! SOMETHING WENT WRONG</p>
              <p className="font-comic text-foreground">Failed to load products. Please try again later.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

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

        {products && products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {products.slice(0, 5).map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={{
                    id: parseInt(product.id.substring(0, 8), 16),
                    name: product.name,
                    price: parseFloat(product.price.toString()),
                    originalPrice: product.original_price ? parseFloat(product.original_price.toString()) : undefined,
                    image: product.image_url,
                    category: product.category?.name || 'Product',
                    isNew: product.is_new,
                    isSale: product.is_sale
                  }}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="font-bangers text-2xl text-pop-orange hover:text-pop-pink transition-colors underline decoration-wavy decoration-4 underline-offset-8">
                VIEW ALL {products.length} PRODUCTS →
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="font-bangers text-2xl text-muted-foreground">NO PRODUCTS FOUND</p>
            <p className="font-comic text-foreground mt-2">Check back soon for amazing items!</p>
          </div>
        )}
      </div>
    </section>
  );
}