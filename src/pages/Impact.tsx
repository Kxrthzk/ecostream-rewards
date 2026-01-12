import { MobileLayout } from "@/components/layout/MobileLayout";
import { Shield, Droplets, Leaf, Award, TrendingUp, Sparkles, Star, Crown, MapPin, Building2, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Impact = () => {
  return (
    <MobileLayout>
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-6 pb-4">
          <h1 className="font-display font-bold text-2xl text-foreground">Your Impact</h1>
          <p className="text-sm text-muted-foreground">Flood prevention & planetary health</p>
        </header>

        <main className="px-5 space-y-6 pb-6">
          {/* Flood Shield Score - Premium Hero Card */}
          <div className="relative overflow-hidden rounded-3xl gradient-teal p-6 text-secondary-foreground shadow-teal animate-slide-up group">
            {/* Animated orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-48 h-48 bg-white/10 rounded-full -top-20 -right-20 animate-float" />
              <div className="absolute w-32 h-32 bg-white/5 rounded-full bottom-0 left-0 -translate-x-1/2 animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute w-20 h-20 bg-white/10 rounded-full top-1/2 left-1/3 animate-float" style={{ animationDelay: "1s" }} />
            </div>
            
            {/* Shimmer */}
            <div className="shimmer absolute inset-0 rounded-3xl" />
            
            <div className="relative z-10 text-center">
              {/* Score circle with glow */}
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-white/30 blur-xl animate-pulse" />
                <div className="relative w-24 h-24 mx-auto rounded-full glass flex items-center justify-center">
                  <Shield className="w-12 h-12 drop-shadow-lg" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Crown className="w-6 h-6 text-accent animate-bounce-subtle" />
                </div>
              </div>
              
              <p className="text-sm font-medium opacity-90 mb-2 flex items-center justify-center gap-2">
                Your Flood Shield Score
                <Sparkles className="w-4 h-4 animate-pulse" />
              </p>
              <p className="stat-number text-7xl mb-2 drop-shadow-lg tracking-tighter">847</p>
              
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-accent fill-accent' : 'text-white/40'}`} />
                  ))}
                </div>
                <span className="text-sm opacity-80">Top 12% in Puchong</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-4 glass rounded-full px-4 py-2 mx-auto w-fit">
                <TrendingUp className="w-4 h-4 text-emerald-300" />
                <span className="text-sm font-semibold">+24 points this month</span>
              </div>
            </div>
          </div>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="group relative overflow-hidden bg-card rounded-2xl p-4 border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover hover:scale-[1.02] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <p className="stat-number text-2xl text-foreground mb-1">20.0 L</p>
                <p className="text-xs text-muted-foreground">Diverted from Drains</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-card rounded-2xl p-4 border border-border transition-all duration-300 hover:border-secondary/30 hover:shadow-card-hover hover:scale-[1.02] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-light to-secondary/20 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <p className="stat-number text-2xl text-foreground mb-1">12.4 kg</p>
                <p className="text-xs text-muted-foreground">CO₂ Emissions Saved</p>
              </div>
            </div>
          </div>

          {/* Grease Heatmap Preview - B2G Value */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-primary-light to-primary/5 rounded-2xl p-4 border border-primary/20 animate-slide-up transition-all duration-300 hover:border-primary/40" style={{ animationDelay: "150ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-foreground flex items-center gap-2">
                  Grease Heatmap
                  <span className="text-[10px] font-medium text-primary bg-primary-light px-1.5 py-0.5 rounded-full">LIVE</span>
                </p>
                <p className="text-xs text-muted-foreground">Your data helps prevent drain blockages</p>
              </div>
            </div>
            <div className="bg-card/50 rounded-xl p-3 border border-border">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Your condo recycling rate</span>
                <span className="font-bold text-secondary">78%</span>
              </div>
              <Progress value={78} className="h-2 mt-2" />
              <p className="text-[10px] text-muted-foreground mt-2">Data shared with MBSJ for flood prevention planning</p>
            </div>
          </div>

          {/* Progress to Next Badge */}
          <div className="group relative overflow-hidden bg-card rounded-2xl p-5 border border-border space-y-4 animate-slide-up transition-all duration-300 hover:border-accent/30 hover:shadow-card-hover" style={{ animationDelay: "200ms" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-accent-light to-accent/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-accent" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-accent animate-pulse" />
                </div>
                <div>
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    Eco Champion
                    <span className="text-[10px] font-medium text-accent bg-accent-light px-1.5 py-0.5 rounded-full">NEXT</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Unlock at 25L recycled</p>
                </div>
              </div>
              <span className="stat-number text-2xl text-gradient-gold">80%</span>
            </div>
            
            <div className="relative z-10">
              <Progress value={80} className="h-3" />
            </div>
            
            <p className="relative z-10 text-xs text-muted-foreground text-center">
              Only <span className="font-bold text-accent">5L more</span> to unlock your next badge!
            </p>
          </div>

          {/* ESG Report Card - B2B Value */}
          <div className="group relative overflow-hidden bg-card rounded-2xl p-4 border border-secondary/20 animate-slide-up transition-all duration-300 hover:border-secondary/40" style={{ animationDelay: "250ms" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-light to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-foreground">Your Green Building Report</p>
                <p className="text-xs text-muted-foreground">ESG data for IOI Puchong Jaya</p>
              </div>
              <div className="text-right">
                <p className="stat-number text-lg text-gradient">A+</p>
                <p className="text-[10px] text-muted-foreground">ESG Score</p>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-light to-primary/10 rounded-2xl p-5 border border-primary/30 animate-slide-up group" style={{ animationDelay: "300ms" }}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                Puchong Community
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="stat-number text-xl text-gradient">2,847 L</p>
                  <p className="text-xs text-muted-foreground">Collected this month</p>
                </div>
                <div>
                  <p className="stat-number text-xl text-foreground">1,243</p>
                  <p className="text-xs text-muted-foreground">Active households</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/20">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">47 condos</span> • <span className="font-semibold text-foreground">12 guardhouse hubs</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MobileLayout>
  );
};

export default Impact;
