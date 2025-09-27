import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface PopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'orange' | 'pink' | 'yellow' | 'blue' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  handDrawn?: boolean;
}

const PopButton = forwardRef<HTMLButtonElement, PopButtonProps>(
  ({ children, variant = 'orange', size = 'md', handDrawn = false, className, ...props }, ref) => {
    const variants = {
      orange: 'bg-pop-orange hover:bg-pop-orange/90 text-white border-pop-orange',
      pink: 'bg-pop-pink hover:bg-pop-pink/90 text-white border-pop-pink',
      yellow: 'bg-pop-yellow hover:bg-pop-yellow/90 text-black border-pop-yellow',
      blue: 'bg-pop-blue hover:bg-pop-blue/90 text-white border-pop-blue',
      purple: 'bg-pop-purple hover:bg-pop-purple/90 text-white border-pop-purple',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <Button
        ref={ref}
        className={cn(
          'font-bangers font-normal tracking-wide border-4 shadow-lg transition-all duration-200',
          'bounce-on-hover transform -rotate-1 hover:rotate-0',
          'hover:shadow-xl hover:scale-105',
          handDrawn && 'hand-drawn',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

PopButton.displayName = "PopButton";

export { PopButton };