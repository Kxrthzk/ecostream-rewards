import { MobileLayout } from "@/components/layout/MobileLayout";
import { HeroRate } from "@/components/home/HeroRate";
import { QuickStats } from "@/components/home/QuickStats";
import { ActionButtons } from "@/components/home/ActionButtons";
import { RecentActivity } from "@/components/home/RecentActivity";
import { Droplets } from "lucide-react";

const Home = () => {
  return (
    <MobileLayout>
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center shadow-card">
                <Droplets className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h1 className="font-display font-bold text-lg text-foreground">Eco-Stream</h1>
                <p className="text-xs text-muted-foreground">Puchong, Malaysia</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-semibold text-foreground">JL</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-5 space-y-6 pb-6">
          {/* Hero Rate Card */}
          <div className="animate-slide-up">
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
