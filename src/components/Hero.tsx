import { PopButton } from "@/components/PopButton";
import { Sparkles, Zap, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute inset-0 halftone opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-pop-yellow animate-bounce">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute top-32 right-20 text-pop-pink animate-wiggle">
        <Zap className="w-10 h-10" />
      </div>
      <div className="absolute bottom-32 left-20 text-pop-blue animate-pulse">
        <Star className="w-6 h-6" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with comic book styling */}
          <div className="relative mb-8">
            <h1 className="font-bangers text-6xl md:text-8xl lg:text-9xl leading-none">
              <span className="text-pop-orange block transform -rotate-2">POP</span>
              <span className="text-pop-pink block transform rotate-1">STYLE</span>
              <span className="text-pop-yellow block transform -rotate-1">SHOP</span>
            </h1>
            
            {/* Comic book speech bubble effect */}
            <div className="absolute -top-4 -right-8 bg-white border-4 border-black rounded-full px-4 py-2 transform rotate-12 hidden md:block">
              <span className="font-bangers text-sm text-black">WOW!</span>
            </div>
          </div>

          <p className="font-comic text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
            Discover the most <span className="text-pop-orange font-bold">AMAZING</span> collection of 
            trendy clothes and <span className="text-pop-pink font-bold">ARTISTIC</span> pieces that will 
            make you stand out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PopButton variant="orange" size="lg" handDrawn>
              <Zap className="w-5 h-5 mr-2" />
              SHOP NOW
            </PopButton>
            
            <PopButton variant="pink" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              VIEW COLLECTION
            </PopButton>
          </div>

          {/* Comic-style price tag */}
          <div className="mt-12 inline-block">
            <div className="bg-pop-yellow border-4 border-black transform -rotate-6 px-6 py-3 relative">
              <span className="font-bangers text-black text-xl">
                FREE SHIPPING ON ORDERS $50+
              </span>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pop-blue/20 rounded-full blur-xl" />
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pop-purple/20 rounded-full blur-xl" />
    </section>
  );
}