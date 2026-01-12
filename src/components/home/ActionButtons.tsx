import { QrCode, Package, Sparkles, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ActionButtons = () => {
  return (
    <div className="space-y-3">
      {/* Primary CTA - Premium scan button */}
      <Button 
        variant="ocean" 
        size="xl" 
        className="w-full rounded-2xl relative overflow-hidden group shadow-button hover:shadow-button-hover transition-all duration-300 hover:scale-[1.02]"
      >
        {/* Animated background shimmer */}
        <div className="absolute inset-0 shimmer opacity-30" />
        
        {/* Pulse ring effect */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 animate-pulse-ring" />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="relative">
            <QrCode className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-accent animate-pulse" />
          </div>
          <span className="font-semibold">Drop & Earn at Guardhouse</span>
        </div>
        
        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
      </Button>

      {/* Guardhouse Hub Info */}
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <MapPin className="w-3.5 h-3.5 text-secondary" />
        <span>Nearest: <span className="font-medium text-foreground">Guardhouse A, Block 7</span></span>
        <span className="text-secondary">• 50m away</span>
      </div>
      
      {/* Secondary CTA - Starter kit */}
      <Button 
        variant="card" 
        size="lg" 
        className="w-full rounded-2xl group hover:border-secondary/50 hover:bg-secondary-light/50 transition-all duration-300 hover:scale-[1.01]"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
          <Package className="w-5 h-5 text-secondary" />
        </div>
        <div className="flex-1 text-left">
          <span className="font-medium text-foreground">Request Starter Kit</span>
          <p className="text-xs text-muted-foreground">Free 1.5L container</p>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300" />
      </Button>
    </div>
  );
};
