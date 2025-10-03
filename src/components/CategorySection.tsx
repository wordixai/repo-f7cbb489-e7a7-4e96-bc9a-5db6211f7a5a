import { PopButton } from "@/components/PopButton";
import { Shirt, Palette, Sparkles, Zap } from "lucide-react";
import { useCategories } from "@/hooks/useProducts";
import { Loader2 } from "lucide-react";

const categoryIcons = {
  'clothing': Shirt,
  'art': Palette,
  'accessories': Sparkles,
  'limited-edition': Zap,
};

const categoryColors = {
  'clothing': 'orange',
  'art': 'pink',
  'accessories': 'yellow',
  'limited-edition': 'purple',
} as const;

export function CategorySection() {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[300px]">
            <Loader2 className="w-12 h-12 text-pop-orange animate-spin" />
          </div>
        </div>
      </section>
    );
  }

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
          {categories?.map((category, index) => {
            const Icon = categoryIcons[category.slug as keyof typeof categoryIcons] || Sparkles;
            const color = categoryColors[category.slug as keyof typeof categoryColors] || 'orange';
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
                    src={category.image_url}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 p-3 bg-white rounded-full border-3 ${colorClasses[color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Dot overlay */}
                  <div className="absolute inset-0 dot-pattern-pink" />
                </div>

                <div className="p-6 relative">
                  <div className="halftone absolute inset-0 opacity-10" />
                  
                  <div className="relative z-10">
                    <h3 className="font-bangers text-xl text-foreground mb-2">
                      {category.name.toUpperCase()}
                    </h3>
                    <p className="font-comic text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    
                    <PopButton 
                      variant={color} 
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