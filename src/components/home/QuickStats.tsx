import { Wallet, Droplets, TrendingUp, Zap } from "lucide-react";

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="group relative overflow-hidden bg-gradient-to-br from-accent-light to-accent/10 rounded-2xl p-4 border border-accent/30 transition-all duration-300 hover:shadow-glow-accent hover:scale-[1.02] hover:border-accent/50 cursor-pointer">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Wallet className="w-5 h-5 text-accent" />
            </div>
            <div className="flex items-center gap-1 text-xs text-accent font-medium">
              <Zap className="w-3 h-3" />
              <span>+RM 2.80</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-medium mb-1">Wallet Balance</p>
          <p className="stat-number text-2xl text-gradient-gold">RM 12.50</p>
        </div>
      </div>
      
      <div className="group relative overflow-hidden bg-gradient-to-br from-secondary-light to-secondary/10 rounded-2xl p-4 border border-secondary/30 transition-all duration-300 hover:shadow-glow-secondary hover:scale-[1.02] hover:border-secondary/50 cursor-pointer">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Droplets className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex items-center gap-1 text-xs text-secondary font-medium">
              <TrendingUp className="w-3 h-3" />
              <span>+2.2L</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-medium mb-1">Total Recycled</p>
          <p className="stat-number text-2xl text-gradient">20.0 L</p>
        </div>
      </div>
    </div>
  );
};