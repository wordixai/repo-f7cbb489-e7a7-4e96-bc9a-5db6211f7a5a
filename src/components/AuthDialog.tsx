import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PopButton } from "@/components/PopButton";
import { useAuth } from "@/lib/auth";
import { Loader2, Mail, Lock, User as UserIcon, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { login, signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        toast.success("Welcome back! 🎉", {
          description: "You've successfully logged in!"
        });
      } else {
        await signup(formData.email, formData.password, formData.name);
        toast.success("Account created! 🎊", {
          description: "Welcome to Pop Shop!"
        });
      }
      onOpenChange(false);
      setFormData({ email: "", password: "", name: "" });
    } catch (error) {
      toast.error("Oops! Something went wrong 😕", {
        description: error instanceof Error ? error.message : "Please try again"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-4 border-pop-orange bg-white">
        <div className="absolute -top-3 -right-3 bg-pop-yellow border-4 border-black rounded-full px-3 py-1 transform rotate-12">
          <span className="font-bangers text-sm text-black">
            {isLogin ? "WELCOME!" : "JOIN US!"}
          </span>
        </div>

        <DialogHeader>
          <DialogTitle className="font-bangers text-3xl text-pop-orange transform -rotate-1 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            {isLogin ? "LOGIN" : "SIGN UP"}
          </DialogTitle>
          <DialogDescription className="font-comic text-base">
            {isLogin 
              ? "Enter your credentials to access your awesome account!" 
              : "Create an account and join our pop art family!"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name" className="font-comic font-bold flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-pop-purple" />
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Cool Person"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-3 border-pop-purple font-comic"
                required={!isLogin}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="font-comic font-bold flex items-center gap-2">
              <Mail className="w-4 h-4 text-pop-orange" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@awesome.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-3 border-pop-orange font-comic"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-comic font-bold flex items-center gap-2">
              <Lock className="w-4 h-4 text-pop-pink" />
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Super secret password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="border-3 border-pop-pink font-comic"
              required
            />
          </div>

          <PopButton
            type="submit"
            variant={isLogin ? "orange" : "pink"}
            size="lg"
            className="w-full"
            disabled={isLoading}
            handDrawn
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {isLogin ? "LOGGING IN..." : "SIGNING UP..."}
              </>
            ) : (
              <>
                {isLogin ? "LOGIN NOW!" : "CREATE ACCOUNT!"}
              </>
            )}
          </PopButton>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="font-comic text-sm text-muted-foreground hover:text-pop-orange transition-colors underline decoration-wavy"
            >
              {isLogin 
                ? "Don't have an account? Sign up here!" 
                : "Already have an account? Login here!"}
            </button>
          </div>
        </form>

        <div className="absolute inset-0 dot-pattern-pink pointer-events-none opacity-5" />
      </DialogContent>
    </Dialog>
  );
}