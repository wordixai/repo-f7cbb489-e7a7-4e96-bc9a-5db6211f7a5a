import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/lib/auth";
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Settings, 
  LogOut,
  Package,
  CreditCard
} from "lucide-react";
import { toast } from "sonner";

export function UserMenu() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("See you later! 👋", {
      description: "You've been logged out successfully"
    });
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Avatar className="w-8 h-8 border-2 border-pop-orange">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-pop-orange text-white font-bangers">
              {user.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:block font-comic font-bold text-sm">
            {user.name}
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className="w-56 border-3 border-pop-orange bg-white"
      >
        <DropdownMenuLabel className="font-bangers text-lg text-pop-orange">
          MY ACCOUNT
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-pop-orange/20" />
        
        <DropdownMenuItem className="font-comic cursor-pointer">
          <User className="mr-2 h-4 w-4 text-pop-orange" />
          <span>Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer">
          <ShoppingBag className="mr-2 h-4 w-4 text-pop-pink" />
          <span>My Orders</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer">
          <Heart className="mr-2 h-4 w-4 text-pop-red" />
          <span>Wishlist</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer">
          <Package className="mr-2 h-4 w-4 text-pop-purple" />
          <span>Track Orders</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer">
          <CreditCard className="mr-2 h-4 w-4 text-pop-blue" />
          <span>Payment Methods</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer">
          <Settings className="mr-2 h-4 w-4 text-pop-yellow" />
          <span>Settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-pop-orange/20" />
        
        <DropdownMenuItem 
          onClick={handleLogout}
          className="font-comic cursor-pointer text-pop-red focus:text-pop-red focus:bg-pop-red/10"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}