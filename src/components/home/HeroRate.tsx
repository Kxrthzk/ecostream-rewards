import { TrendingUp, Sparkles, Zap, Building2 } from "lucide-react";

export const HeroRate = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl gradient-reward p-6 text-accent-foreground shadow-reward group cursor-pointer transition-all duration-500 hover:shadow-glow-accent hover:scale-[1.02]">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-40 h-40 bg-white/15 rounded-full -top-16 -right-16 animate-float" />
        <div className="absolute w-28 h-28 bg-white/10 rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute w-16 h-16 bg-white/10 rounded-full top-1/2 right-1/4 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>
      
      {/* Shimmer effect */}
      <div className="shimmer absolute inset-0 rounded-3xl" />
      
      {/* Decorative circles */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/40 animate-pulse" />
      <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 glass rounded-full px-3 py-1.5">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Today's UCO Rate</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium glass rounded-full px-2 py-1">
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span>+5%</span>
          </div>
        </div>
        
        <div className="flex items-baseline gap-2 mb-2">
          <p className="stat-number text-6xl animate-gradient tracking-tighter drop-shadow-lg">RM 2.00</p>
          <span className="text-xl font-bold opacity-80">/ KG</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm opacity-90">
          <Sparkles className="w-4 h-4" />
          <span>Market rate updated daily</span>
        </div>

        {/* Arbitrage hint - subtle indicator */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs opacity-80">
              <Building2 className="w-3.5 h-3.5" />
              <span>Sold to ISCC-certified refiners</span>
            </div>
            <span className="text-[10px] glass rounded-full px-2 py-0.5 font-medium">FatHopes • Neste</span>
          </div>
        </div>
      </div>
    </div>
  );
};
