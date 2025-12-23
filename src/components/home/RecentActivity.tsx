import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const recentDropoffs = [
  { date: "Nov 25", location: "Guardhouse A", weight: "1.4kg", reward: "2.80", isNew: true },
  { date: "Nov 18", location: "Guardhouse A", weight: "0.8kg", reward: "1.60", isNew: false },
];

export const RecentActivity = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold text-foreground">Recent Activity</h3>
        <button className="text-sm text-primary font-medium flex items-center gap-1 group hover:gap-2 transition-all duration-300">
          View All 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
      
      <div className="space-y-2">
        {recentDropoffs.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-card rounded-xl p-4 border border-border flex items-center justify-between transition-all duration-300 hover:border-secondary/30 hover:shadow-card-hover hover:scale-[1.01] cursor-pointer"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-secondary-light to-secondary/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                {item.isNew && (
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-card animate-pulse" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm text-foreground">{item.location}</p>
                  {item.isNew && (
                    <span className="flex items-center gap-0.5 text-[10px] font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5" />
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{item.date} • {item.weight}</p>
              </div>
            </div>
            <div className="relative z-10 text-right">
              <p className="stat-number text-lg text-gradient-gold">+RM {item.reward}</p>
              <p className="text-[10px] text-muted-foreground">Earned</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};