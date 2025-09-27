import { PopButton } from "@/components/PopButton";
import { Shirt, Palette, Sparkles, Zap } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "TRENDY CLOTHES",
    description: "The coolest outfits that scream STYLE!",
    icon: Shirt,
    color: "orange",
    bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    name: "ART PIECES",
    description: "Unique artwork to decorate your world!",
    icon: Palette,
    color: "pink",
    bgImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    name: "ACCESSORIES",
    description: "Funky add-ons for the perfect look!",
    icon: Sparkles,
    color: "yellow",
    bgImage: "https://images.unsplash.com/photo-1506629905607-ce51c8d3d9eb?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    name: "LIMITED EDITION",
    description: "Rare finds you won't see anywhere else!",
    icon: Zap,
    color: "purple",
    bgImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=300&fit=crop"
  }
];

export function CategorySection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 dot-pattern opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bangers text-5xl md:text-6xl text-pop-orange mb-4 transform -rotate-1">
            SHOP BY CATEGORY
          </h2>
          <p className="font-comic text-xl text-foreground max-w-2xl mx-auto">
            Dive into our <span className="text-pop-pink font-bold">AMAZING</span> categories 
            and find exactly what makes you feel <span className="text-pop-orange font-bold">AWESOME!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              orange: 'border-pop-orange text-pop-orange',
              pink: 'border-pop-pink text-pop-pink',
              yellow: 'border-pop-yellow text-pop-yellow',
              purple: 'border-pop-purple text-pop-purple',
            };

            return (
              <div
                key={category.id}
                className={`comic-frame bg-white overflow-hidden group cursor-pointer ${
                  index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'
                } hover:rotate-0 transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.bgImage}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 p-3 bg-white rounded-full border-3 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Dot overlay */}
                  <div className="absolute inset-0 dot-pattern-pink" />
                </div>

                <div className="p-6 relative">
                  <div className="halftone absolute inset-0 opacity-10" />
                  
                  <div className="relative z-10">
                    <h3 className="font-bangers text-xl text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="font-comic text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    
                    <PopButton 
                      variant={category.color as any} 
                      size="sm" 
                      className="w-full"
                      handDrawn
                    >
                      EXPLORE
                    </PopButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}