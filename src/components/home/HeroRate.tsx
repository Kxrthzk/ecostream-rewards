import { TrendingUp, Droplets, Sparkles } from "lucide-react";

export const HeroRate = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl gradient-ocean p-6 text-primary-foreground shadow-button animate-gradient group cursor-pointer transition-all duration-500 hover:shadow-glow-primary hover:scale-[1.02]">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>
      
      {/* Shimmer effect */}
      <div className="shimmer absolute inset-0 rounded-3xl" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-float" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white/30 rounded-full animate-bounce-subtle" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-2 glass rounded-full px-3 py-1.5">
            <Droplets className="w-4 h-4 animate-bounce-subtle" />
            <span className="text-sm font-medium">Today's UCO Rate</span>
          </div>
          <Sparkles className="w-4 h-4 animate-pulse-soft text-accent" />
        </div>
        
        <div className="flex items-baseline gap-2 mb-1">
          <span className="stat-number text-6xl tracking-tighter drop-shadow-lg">RM 2.00</span>
          <span className="text-xl opacity-80 font-medium">/ KG</span>
        </div>
        
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5 transition-transform hover:scale-105">
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-semibold">+5% this week</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
          <span className="text-xs opacity-70">Live rate</span>
        </div>
      </div>
    </div>
  );
};