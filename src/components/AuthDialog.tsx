import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PopButton } from "@/components/PopButton";
import { User, Mail, Lock, Eye, EyeOff, Sparkles, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { loginEmail, loginPassword });
    // Add your login logic here
    onOpenChange(false);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", { signupName, signupEmail, signupPassword });
    // Add your signup logic here
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-4 border-pop-orange bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-pop-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pop-yellow/10 rounded-full blur-3xl" />

        <DialogHeader className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-pop-orange p-4 rounded-full border-4 border-black transform -rotate-6">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogTitle className="font-bangers text-3xl text-center text-pop-orange transform -rotate-1">
            WELCOME BACK!
          </DialogTitle>
        </DialogHeader>

        <div className="relative z-10">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted mb-6">
              <TabsTrigger 
                value="login" 
                className="font-comic font-bold data-[state=active]:bg-pop-orange data-[state=active]:text-white"
              >
                LOGIN
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="font-comic font-bold data-[state=active]:bg-pop-pink data-[state=active]:text-white"
              >
                SIGN UP
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="font-comic font-bold text-foreground">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pop-orange" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your.email@cool.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="pl-10 border-2 border-pop-orange/30 focus:border-pop-orange font-comic"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="font-comic font-bold text-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pop-orange" />
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="pl-10 pr-10 border-2 border-pop-orange/30 focus:border-pop-orange font-comic"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-pop-orange hover:text-pop-pink transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer font-comic">
                    <input type="checkbox" className="rounded border-pop-orange text-pop-orange focus:ring-pop-orange" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-pop-pink hover:text-pop-orange font-comic font-bold">
                    Forgot password?
                  </a>
                </div>

                <PopButton type="submit" variant="orange" size="lg" className="w-full" handDrawn>
                  <Zap className="w-5 h-5 mr-2" />
                  LOGIN NOW!
                </PopButton>

                {/* Social Login */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-dashed border-pop-orange/30" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 font-comic text-sm text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 border-2 border-pop-blue rounded-lg hover:bg-pop-blue/10 transition-colors font-comic font-bold"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 border-2 border-pop-purple rounded-lg hover:bg-pop-purple/10 transition-colors font-comic font-bold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                </div>
              </form>
            </TabsContent>

            {/* Signup Form */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="font-comic font-bold text-foreground">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pop-pink" />
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Your Awesome Name"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="pl-10 border-2 border-pop-pink/30 focus:border-pop-pink font-comic"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="font-comic font-bold text-foreground">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pop-pink" />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your.email@cool.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="pl-10 border-2 border-pop-pink/30 focus:border-pop-pink font-comic"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="font-comic font-bold text-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pop-pink" />
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      className="pl-10 pr-10 border-2 border-pop-pink/30 focus:border-pop-pink font-comic"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-pop-pink hover:text-pop-orange transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground font-comic">
                    Must be at least 8 characters long
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="rounded border-pop-pink text-pop-pink focus:ring-pop-pink mt-1" 
                    required
                  />
                  <label htmlFor="terms" className="text-sm font-comic cursor-pointer">
                    I agree to the <a href="#" className="text-pop-pink font-bold hover:text-pop-orange">Terms of Service</a> and <a href="#" className="text-pop-pink font-bold hover:text-pop-orange">Privacy Policy</a>
                  </label>
                </div>

                <PopButton type="submit" variant="pink" size="lg" className="w-full" handDrawn>
                  <Sparkles className="w-5 h-5 mr-2" />
                  CREATE ACCOUNT!
                </PopButton>

                {/* Social Signup */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-dashed border-pop-pink/30" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 font-comic text-sm text-muted-foreground">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 border-2 border-pop-blue rounded-lg hover:bg-pop-blue/10 transition-colors font-comic font-bold"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 border-2 border-pop-purple rounded-lg hover:bg-pop-purple/10 transition-colors font-comic font-bold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}