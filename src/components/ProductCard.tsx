import { Card, CardContent } from "@/components/ui/card";
import { PopButton } from "@/components/PopButton";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    isNew?: boolean;
    isSale?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="comic-frame bg-white overflow-hidden group cursor-pointer">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-pop-yellow text-black font-bangers text-xs px-2 py-1 rotate-12">
              NEW!
            </Badge>
          )}
          {product.isSale && (
            <Badge className="bg-pop-red text-white font-bangers text-xs px-2 py-1 -rotate-12">
              SALE!
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-pop-pink" />
        </button>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern-pink pointer-events-none" />
      </div>

      <CardContent className="p-4 relative">
        <div className="halftone absolute inset-0 opacity-5" />
        
        <div className="relative z-10">
          <p className="text-xs text-pop-purple font-comic font-bold uppercase tracking-wide mb-1">
            {product.category}
          </p>
          
          <h3 className="font-fredoka text-lg font-normal text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bangers text-pop-orange">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <PopButton 
              variant="orange" 
              size="sm" 
              className="flex-1 text-sm"
              handDrawn
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              ADD TO CART
            </PopButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}