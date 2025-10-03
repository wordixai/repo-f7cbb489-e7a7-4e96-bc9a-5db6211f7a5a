import { useState } from "react";
import { PopButton } from "@/components/PopButton";
import { AuthDialog } from "@/components/AuthDialog";
import { UserMenu } from "@/components/UserMenu";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, Menu, X, Search, Heart } from "lucide-react";
import { useAuth } from "@/lib/auth";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-pop-orange">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="font-bangers text-3xl text-pop-orange transform -rotate-2 cursor-pointer">
                POP SHOP
              </h1>
              <div className="ml-2 bg-pop-yellow px-2 py-1 rounded-full transform rotate-12">
                <span className="font-bangers text-xs text-black">COOL!</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-comic font-bold text-foreground hover:text-pop-orange transition-colors">
                NEW ARRIVALS
              </a>
              <a href="#" className="font-comic font-bold text-foreground hover:text-pop-pink transition-colors">
                CLOTHING
              </a>
              <a href="#" className="font-comic font-bold text-foreground hover:text-pop-blue transition-colors">
                ART PIECES
              </a>
              <a href="#" className="font-comic font-bold text-foreground hover:text-pop-purple transition-colors">
                SALE
              </a>
            </nav>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="hidden sm:flex p-2 hover:bg-pop-yellow/20 rounded-full transition-colors">
                <Search className="w-5 h-5 text-foreground" />
              </button>

              {/* Wishlist */}
              <button className="hidden sm:flex p-2 hover:bg-pop-pink/20 rounded-full transition-colors relative">
                <Heart className="w-5 h-5 text-foreground" />
                <Badge className="absolute -top-1 -right-1 bg-pop-pink text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">
                  3
                </Badge>
              </button>

              {/* Cart */}
              <button className="p-2 hover:bg-pop-orange/20 rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5 text-foreground" />
                <Badge className="absolute -top-1 -right-1 bg-pop-orange text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">
                  2
                </Badge>
              </button>

              {/* User - Show UserMenu if authenticated, otherwise show Login button */}
              {isAuthenticated ? (
                <div className="hidden sm:block">
                  <UserMenu />
                </div>
              ) : (
                <PopButton 
                  variant="orange" 
                  size="sm" 
                  className="hidden sm:flex"
                  onClick={() => setIsAuthDialogOpen(true)}
                >
                  <User className="w-4 h-4 mr-1" />
                  LOGIN
                </PopButton>
              )}

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-pop-orange/20">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="font-comic font-bold text-foreground hover:text-pop-orange transition-colors">
                  NEW ARRIVALS
                </a>
                <a href="#" className="font-comic font-bold text-foreground hover:text-pop-pink transition-colors">
                  CLOTHING
                </a>
                <a href="#" className="font-comic font-bold text-foreground hover:text-pop-blue transition-colors">
                  ART PIECES
                </a>
                <a href="#" className="font-comic font-bold text-foreground hover:text-pop-purple transition-colors">
                  SALE
                </a>
                
                {isAuthenticated ? (
                  <div className="pt-2">
                    <UserMenu />
                  </div>
                ) : (
                  <PopButton 
                    variant="orange" 
                    size="sm" 
                    className="self-start"
                    onClick={() => setIsAuthDialogOpen(true)}
                  >
                    <User className="w-4 h-4 mr-1" />
                    LOGIN
                  </PopButton>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </>
  );
}