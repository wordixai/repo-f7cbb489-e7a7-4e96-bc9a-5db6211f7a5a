import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Settings, 
  LogOut,
  Package,
  CreditCard
} from "lucide-react";

interface UserMenuProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout: () => void;
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 p-2 hover:bg-pop-orange/20 rounded-full transition-colors">
          <Avatar className="w-8 h-8 border-2 border-pop-orange">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-pop-orange text-white font-bangers">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline font-comic font-bold text-foreground">
            {user.name}
          </span>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-56 border-2 border-pop-orange/20 bg-white"
      >
        <DropdownMenuLabel className="font-comic">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-bold text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-pop-orange/20" />
        
        <DropdownMenuItem className="font-comic cursor-pointer hover:bg-pop-yellow/20">
          <User className="mr-2 h-4 w-4 text-pop-orange" />
          <span>My Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer hover:bg-pop-yellow/20">
          <ShoppingBag className="mr-2 h-4 w-4 text-pop-pink" />
          <span>My Orders</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer hover:bg-pop-yellow/20">
          <Heart className="mr-2 h-4 w-4 text-pop-pink" />
          <span>Wishlist</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer hover:bg-pop-yellow/20">
          <Package className="mr-2 h-4 w-4 text-pop-blue" />
          <span>Track Order</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer hover:bg-pop-yellow/20">
          <CreditCard className="mr-2 h-4 w-4 text-pop-purple" />
          <span>Payment Methods</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="font-comic cursor-pointer hover:bg-pop-yellow/20">
          <Settings className="mr-2 h-4 w-4 text-pop-blue" />
          <span>Settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-pop-orange/20" />
        
        <DropdownMenuItem 
          className="font-comic font-bold cursor-pointer hover:bg-pop-red/20 text-pop-red"
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}