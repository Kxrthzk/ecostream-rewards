import { MobileLayout } from "@/components/layout/MobileLayout";
import { CheckCircle2, Circle, Plane, Factory, Truck, Building2, ShieldCheck, Sparkles, Zap, Fuel } from "lucide-react";

const journeySteps = [
  {
    icon: CheckCircle2,
    title: "Collected by UCOnnect",
    description: "Dropped off at Guardhouse A, Block 7 (Micro-Hub)",
    date: "Nov 25, 2024 - 10:42 AM",
    status: "completed",
    weight: "1.4 kg",
  },
  {
    icon: Truck,
    title: "In Transit to Depot",
    description: "Aggregated with 498.6kg from other guardhouses",
    date: "Nov 25, 2024 - 2:15 PM",
    status: "completed",
  },
  {
    icon: Building2,
    title: "Arrived at Puchong Depot",
    description: "Quality tested & consolidated for refinery shipment",
    date: "Nov 26, 2024 - 9:30 AM",
    status: "completed",
  },
  {
    icon: Factory,
    title: "At FatHopes Energy Refinery",
    description: "ISCC-certified processing facility in Port Klang",
    date: "Nov 27, 2024 - 8:00 AM",
    status: "current",
  },
  {
    icon: Plane,
    title: "Converted to SAF",
    description: "Sustainable Aviation Fuel for Neste supply chain",
    date: "Expected: Dec 2, 2024",
    status: "pending",
  },
];

const Traceability = () => {
  return (
    <MobileLayout>
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-6 pb-4">
          <h1 className="font-display font-bold text-2xl text-foreground">Oil Journey</h1>
          <p className="text-sm text-muted-foreground">Blockchain-verified traceability</p>
        </header>

        <main className="px-5 space-y-6 pb-6">
          {/* Certification Badge - Premium */}
          <div className="group relative overflow-hidden bg-card rounded-2xl p-4 border border-secondary/30 flex items-center gap-4 animate-slide-up transition-all duration-300 hover:border-secondary/50 hover:shadow-glow-secondary cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-secondary-light to-secondary/20 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-8 h-8 text-secondary" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              </div>
            </div>
            <div className="relative z-10">
              <p className="font-semibold text-foreground flex items-center gap-2">
                ISCC Certified Chain
                <span className="flex items-center gap-0.5 text-[10px] font-semibold text-secondary bg-secondary-light px-1.5 py-0.5 rounded-full">
                  <Zap className="w-2.5 h-2.5" />
                  VERIFIED
                </span>
              </p>
              <p className="text-xs text-muted-foreground">Not "gutter oil" - 100% legitimate domestic waste</p>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h3 className="font-display font-semibold text-foreground">Latest Drop-off Journey</h3>
            
            <div className="bg-card rounded-2xl p-5 border border-border">
              <div className="relative">
                {journeySteps.map((step, index) => {
                  const isLast = index === journeySteps.length - 1;
                  const StatusIcon = step.status === "completed" ? CheckCircle2 : 
                                     step.status === "current" ? step.icon : Circle;
                  
                  return (
                    <div key={index} className="relative flex gap-4 pb-6 last:pb-0 group cursor-pointer">
                      {/* Timeline line */}
                      {!isLast && (
                        <div className={`absolute left-5 top-12 w-0.5 h-[calc(100%-3rem)] transition-all duration-500 ${
                          step.status === "completed" 
                            ? "bg-gradient-to-b from-secondary to-secondary/50" 
                            : step.status === "current"
                            ? "bg-gradient-to-b from-primary to-border"
                            : "bg-border"
                        }`} />
                      )}
                      
                      {/* Icon */}
                      <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                        step.status === "completed" 
                          ? "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-teal" 
                          : step.status === "current"
                          ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-button animate-pulse-soft"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <StatusIcon className="w-5 h-5" />
                        {step.status === "current" && (
                          <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <p className={`font-semibold text-sm transition-colors ${
                          step.status === "pending" ? "text-muted-foreground" : "text-foreground"
                        }`}>
                          {step.title}
                          {step.status === "current" && (
                            <span className="ml-2 inline-flex items-center gap-0.5 text-[10px] font-semibold text-primary bg-primary-light px-1.5 py-0.5 rounded-full">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                              PROCESSING
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <p className={`text-xs ${
                            step.status === "current" ? "text-primary font-medium" : "text-muted-foreground"
                          }`}>
                            {step.date}
                          </p>
                          {step.weight && (
                            <span className="text-[10px] font-medium text-accent bg-accent-light px-1.5 py-0.5 rounded-full">
                              {step.weight}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SAF Info Card - Premium */}
          <div className="relative overflow-hidden rounded-2xl gradient-ocean p-5 text-primary-foreground animate-slide-up group" style={{ animationDelay: "200ms" }}>
            {/* Animated orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-24 h-24 bg-white/10 rounded-full -top-10 -right-10 animate-float" />
              <div className="absolute w-16 h-16 bg-white/5 rounded-full bottom-0 left-1/4 animate-float" style={{ animationDelay: "1s" }} />
            </div>
            
            {/* Shimmer */}
            <div className="shimmer absolute inset-0 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <Fuel className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">Sustainable Aviation Fuel</h4>
                  <p className="text-xs opacity-80">Powering cleaner flights worldwide</p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Your UCO is processed by <span className="font-bold">FatHopes Energy</span> and supplied to <span className="font-bold">Neste</span> – reducing aviation emissions by up to <span className="font-bold text-accent">80%</span>.
              </p>
            </div>
          </div>

          {/* Value Chain Stats */}
          <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="group relative overflow-hidden bg-card rounded-2xl p-4 border border-secondary/30 text-center transition-all duration-300 hover:shadow-glow-secondary hover:scale-[1.02] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="stat-number text-3xl text-gradient mb-1">100%</p>
                <p className="text-xs text-muted-foreground">Blockchain Traced</p>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-card rounded-2xl p-4 border border-primary/30 text-center transition-all duration-300 hover:shadow-glow-primary hover:scale-[1.02] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="stat-number text-3xl text-foreground mb-1">0%</p>
                <p className="text-xs text-muted-foreground">Gutter Oil Risk</p>
              </div>
            </div>
          </div>

          {/* Refinery Partners */}
          <div className="bg-card rounded-2xl p-4 border border-border animate-slide-up" style={{ animationDelay: "400ms" }}>
            <h4 className="font-semibold text-sm text-foreground mb-3">Certified Refinery Partners</h4>
            <div className="flex gap-3">
              <div className="flex-1 bg-muted/50 rounded-xl p-3 text-center">
                <p className="font-bold text-foreground">FatHopes Energy</p>
                <p className="text-[10px] text-muted-foreground">Port Klang, Malaysia</p>
              </div>
              <div className="flex-1 bg-muted/50 rounded-xl p-3 text-center">
                <p className="font-bold text-foreground">Neste</p>
                <p className="text-[10px] text-muted-foreground">Global SAF Supplier</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MobileLayout>
  );
};

export default Traceability;
