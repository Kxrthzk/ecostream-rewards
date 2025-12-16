import { Wallet, Droplets } from "lucide-react";

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-accent-light rounded-2xl p-4 border border-accent/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <Wallet className="w-4 h-4 text-accent" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">Wallet Balance</span>
        </div>
        <p className="stat-number text-2xl text-accent-foreground">RM 12.50</p>
      </div>
      
      <div className="bg-secondary-light rounded-2xl p-4 border border-secondary/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
            <Droplets className="w-4 h-4 text-secondary" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">Total Recycled</span>
        </div>
        <p className="stat-number text-2xl text-foreground">20.0 L</p>
      </div>
    </div>
  );
};
