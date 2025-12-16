import { TrendingUp, Droplets } from "lucide-react";

export const HeroRate = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl gradient-ocean p-6 text-primary-foreground shadow-lg">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Droplets className="w-5 h-5" />
          <span className="text-sm font-medium opacity-90">Today's UCO Rate</span>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="stat-number text-5xl">RM 2.00</span>
          <span className="text-lg opacity-80">/ KG</span>
        </div>
        
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1 bg-white/20 rounded-full px-2 py-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">+5% this week</span>
          </div>
        </div>
      </div>
    </div>
  );
};
