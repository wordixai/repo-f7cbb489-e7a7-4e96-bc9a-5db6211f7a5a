import { PopButton } from "@/components/PopButton";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  Heart,
  Zap,
  Star
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-pop-orange to-pop-pink text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute inset-0 halftone opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-pop-yellow animate-bounce">
        <Star className="w-6 h-6" />
      </div>
      <div className="absolute top-20 right-20 text-white/50 animate-wiggle">
        <Zap className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-pop-yellow/70 animate-pulse">
        <Heart className="w-5 h-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 text-center border-b border-white/20">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bangers text-4xl md:text-5xl mb-4 transform -rotate-1">
              JOIN OUR POP FAMILY!
            </h2>
            <p className="font-comic text-lg mb-8">
              Get the latest <span className="font-bold">COOL</span> updates, 
              exclusive deals, and <span className="font-bold">AMAZING</span> content 
              straight to your inbox!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="your.email@awesome.com" 
                className="flex-1 border-4 border-white bg-white/90 text-black font-comic placeholder:text-gray-500"
              />
              <PopButton variant="yellow" size="md" handDrawn>
                <Mail className="w-4 h-4 mr-2" />
                SUBSCRIBE!
              </PopButton>
            </div>
            
            <p className="text-sm mt-4 opacity-80 font-comic">
              Don't worry, we hate spam too! Only the good stuff! ✨
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <h3 className="font-bangers text-3xl text-white transform -rotate-2">
                POP SHOP
              </h3>
              <div className="ml-2 bg-pop-yellow px-2 py-1 rounded-full transform rotate-12">
                <span className="font-bangers text-xs text-black">WOW!</span>
              </div>
            </div>
            
            <p className="font-comic text-white/80 mb-6 leading-relaxed">
              Your one-stop destination for the most <span className="font-bold text-pop-yellow">INCREDIBLE</span> 
              pop art fashion and unique pieces that make you stand out from the crowd!
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: "hover:text-blue-300" },
                { icon: Instagram, color: "hover:text-pink-300" },
                { icon: Twitter, color: "hover:text-blue-400" },
                { icon: Youtube, color: "hover:text-red-300" }
              ].map(({ icon: Icon, color }, index) => (
                <button
                  key={index}
                  className={`p-3 bg-white/10 rounded-full border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bangers text-2xl text-pop-yellow mb-6 transform rotate-1">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 font-comic">
              {[
                "New Arrivals",
                "Best Sellers",
                "Sale Items",
                "Gift Cards",
                "Size Guide",
                "About Us"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-pop-yellow transition-colors duration-300 hover:underline decoration-wavy"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-bangers text-2xl text-pop-yellow mb-6 transform -rotate-1">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-3 font-comic">
              {[
                "Contact Us",
                "Shipping Info",
                "Returns & Exchanges",
                "FAQ",
                "Track Your Order",
                "Privacy Policy"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-pop-yellow transition-colors duration-300 hover:underline decoration-wavy"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bangers text-2xl text-pop-yellow mb-6 transform rotate-1">
              GET IN TOUCH
            </h4>
            
            <div className="space-y-4 font-comic">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pop-yellow mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>123 Pop Art Street</p>
                  <p>Creative District, Art City</p>
                  <p>CA 90210, USA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pop-yellow flex-shrink-0" />
                <span className="text-white/80">+1 (555) POP-SHOP</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pop-yellow flex-shrink-0" />
                <span className="text-white/80">hello@popshop.com</span>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg border-2 border-white/20">
              <h5 className="font-bangers text-lg text-pop-yellow mb-2">STORE HOURS</h5>
              <div className="text-sm text-white/80 font-comic space-y-1">
                <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-comic text-white/80">
                © 2024 Pop Shop. Made with <Heart className="inline w-4 h-4 text-pop-yellow mx-1" /> 
                for all the creative souls out there!
              </p>
            </div>
            
            <div className="flex items-center space-x-6 font-comic text-sm">
              <a href="#" className="text-white/80 hover:text-pop-yellow transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-pop-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-pop-yellow transition-colors">
                Cookies
              </a>
            </div>
          </div>
          
          {/* Fun credit */}
          <div className="text-center mt-6">
            <div className="inline-block bg-pop-yellow px-4 py-2 rounded-full transform -rotate-3">
              <span className="font-bangers text-black text-sm">
                KEEP BEING AWESOME! ⭐
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}