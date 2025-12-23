import { MobileLayout } from "@/components/layout/MobileLayout";
import { HeroRate } from "@/components/home/HeroRate";
import { QuickStats } from "@/components/home/QuickStats";
import { ActionButtons } from "@/components/home/ActionButtons";
import { RecentActivity } from "@/components/home/RecentActivity";
import { Droplets, Bell, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <MobileLayout>
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl gradient-teal flex items-center justify-center shadow-teal group cursor-pointer hover:scale-105 transition-all duration-300">
                <Droplets className="w-6 h-6 text-secondary-foreground" />
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="font-display font-bold text-xl text-foreground">UCOnnect</h1>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  Puchong, Malaysia
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="relative w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors hover:scale-105 active:scale-95 duration-200">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-accent rounded-full border-2 border-card animate-pulse" />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-button cursor-pointer hover:scale-105 transition-all duration-200">
                <span className="text-sm font-bold text-primary-foreground">JL</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-5 space-y-6 pb-6">
          {/* Hero Rate Card */}
          <div className="animate-slide-up" style={{ animationDelay: "0ms" }}>
            <HeroRate />
          </div>

          {/* Quick Stats */}
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <QuickStats />
          </div>

          {/* Action Buttons */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <ActionButtons />
          </div>

          {/* Recent Activity */}
          <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
            <RecentActivity />
          </div>
        </main>
      </div>
    </MobileLayout>
  );
};

export default Home;