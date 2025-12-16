import { MobileLayout } from "@/components/layout/MobileLayout";
import { CheckCircle2, Circle, Plane, Factory, Truck, Building2, ShieldCheck } from "lucide-react";

const journeySteps = [
  {
    icon: CheckCircle2,
    title: "Collected by Eco-Stream",
    description: "Your UCO was picked up from Guardhouse A, Block 7",
    date: "Nov 25, 2024 - 10:42 AM",
    status: "completed",
  },
  {
    icon: Truck,
    title: "In Transit to Depot",
    description: "Being transported to regional collection depot",
    date: "Nov 25, 2024 - 2:15 PM",
    status: "completed",
  },
  {
    icon: Building2,
    title: "Arrived at Depot",
    description: "Quality tested and consolidated at Puchong Depot",
    date: "Nov 26, 2024 - 9:30 AM",
    status: "completed",
  },
  {
    icon: Factory,
    title: "Sent to Refinery",
    description: "Dispatched to certified bio-refinery partner",
    date: "Nov 27, 2024 - 8:00 AM",
    status: "current",
  },
  {
    icon: Plane,
    title: "Converted to SAF",
    description: "Transformed into Sustainable Aviation Fuel",
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
          <p className="text-sm text-muted-foreground">Track where your UCO goes</p>
        </header>

        <main className="px-5 space-y-6 pb-6">
          {/* Certification Badge */}
          <div className="bg-card rounded-2xl p-4 border border-border flex items-center gap-4 animate-slide-up">
            <div className="w-14 h-14 rounded-xl bg-secondary-light flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">ISCC Certified Supply Chain</p>
              <p className="text-xs text-muted-foreground">Your oil never becomes "gutter oil" - guaranteed</p>
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
                    <div key={index} className="relative flex gap-4 pb-6 last:pb-0">
                      {/* Timeline line */}
                      {!isLast && (
                        <div className={`absolute left-5 top-10 w-0.5 h-[calc(100%-2.5rem)] ${
                          step.status === "completed" ? "bg-secondary" : "bg-border"
                        }`} />
                      )}
                      
                      {/* Icon */}
                      <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.status === "completed" 
                          ? "bg-secondary text-secondary-foreground" 
                          : step.status === "current"
                          ? "bg-primary text-primary-foreground animate-pulse-soft"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <StatusIcon className="w-5 h-5" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <p className={`font-semibold text-sm ${
                          step.status === "pending" ? "text-muted-foreground" : "text-foreground"
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                        <p className={`text-xs mt-2 ${
                          step.status === "current" ? "text-primary font-medium" : "text-muted-foreground"
                        }`}>
                          {step.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SAF Info Card */}
          <div className="relative overflow-hidden rounded-2xl gradient-ocean p-5 text-primary-foreground animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Plane className="w-6 h-6" />
                <h4 className="font-display font-semibold">What is SAF?</h4>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Sustainable Aviation Fuel (SAF) made from your used cooking oil reduces aviation carbon emissions by up to <span className="font-bold">80%</span> compared to conventional jet fuel.
              </p>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="bg-card rounded-2xl p-4 border border-border text-center">
              <p className="stat-number text-2xl text-secondary mb-1">100%</p>
              <p className="text-xs text-muted-foreground">Traceable Chain</p>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border text-center">
              <p className="stat-number text-2xl text-primary mb-1">0%</p>
              <p className="text-xs text-muted-foreground">Gutter Oil Risk</p>
            </div>
          </div>
        </main>
      </div>
    </MobileLayout>
  );
};

export default Traceability;
