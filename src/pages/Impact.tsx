import { MobileLayout } from "@/components/layout/MobileLayout";
import { Shield, Droplets, Leaf, Award, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Impact = () => {
  return (
    <MobileLayout>
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-6 pb-4">
          <h1 className="font-display font-bold text-2xl text-foreground">Your Impact</h1>
          <p className="text-sm text-muted-foreground">Track your contribution to planetary health</p>
        </header>

        <main className="px-5 space-y-6 pb-6">
          {/* Flood Shield Score */}
          <div className="relative overflow-hidden rounded-3xl gradient-teal p-6 text-secondary-foreground shadow-lg animate-slide-up">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Shield className="w-10 h-10" />
              </div>
              
              <p className="text-sm font-medium opacity-90 mb-2">Your Flood Shield Score</p>
              <p className="stat-number text-6xl mb-2">847</p>
              <p className="text-sm opacity-80">Top 12% in Puchong</p>
              
              <div className="flex items-center justify-center gap-2 mt-4 bg-white/20 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+24 points this month</span>
              </div>
            </div>
          </div>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="bg-card rounded-2xl p-4 border border-border">
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-3">
                <Droplets className="w-5 h-5 text-primary" />
              </div>
              <p className="stat-number text-2xl text-foreground mb-1">20.0 L</p>
              <p className="text-xs text-muted-foreground">Oil Diverted from Drains</p>
            </div>
            
            <div className="bg-card rounded-2xl p-4 border border-border">
              <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5 text-secondary" />
              </div>
              <p className="stat-number text-2xl text-foreground mb-1">12.4 kg</p>
              <p className="text-xs text-muted-foreground">CO₂ Emissions Saved</p>
            </div>
          </div>

          {/* Progress to Next Badge */}
          <div className="bg-card rounded-2xl p-5 border border-border space-y-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Eco Champion</p>
                  <p className="text-xs text-muted-foreground">Next badge at 25L</p>
                </div>
              </div>
              <span className="stat-number text-lg text-primary">80%</span>
            </div>
            
            <Progress value={80} className="h-3" />
            
            <p className="text-xs text-muted-foreground text-center">
              Only <span className="font-semibold text-foreground">5L more</span> to unlock your next badge!
            </p>
          </div>

          {/* Monthly Breakdown */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h3 className="font-display font-semibold text-foreground">Monthly Impact</h3>
            
            <div className="bg-card rounded-2xl p-5 border border-border space-y-4">
              {[
                { month: "November 2024", liters: "4.2L", score: "+89" },
                { month: "October 2024", liters: "5.8L", score: "+112" },
                { month: "September 2024", liters: "3.1L", score: "+67" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.month}</p>
                    <p className="text-xs text-muted-foreground">{item.liters} recycled</p>
                  </div>
                  <div className="text-right">
                    <p className="stat-number text-sm text-secondary">{item.score}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-primary-light rounded-2xl p-5 border border-primary/20 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <h4 className="font-display font-semibold text-foreground mb-3">Puchong Community</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="stat-number text-xl text-primary">2,847 L</p>
                <p className="text-xs text-muted-foreground">Total collected this month</p>
              </div>
              <div>
                <p className="stat-number text-xl text-primary">1,243</p>
                <p className="text-xs text-muted-foreground">Active eco-warriors</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MobileLayout>
  );
};

export default Impact;
