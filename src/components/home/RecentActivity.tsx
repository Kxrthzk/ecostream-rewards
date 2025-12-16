import { ArrowRight, CheckCircle2 } from "lucide-react";

const recentDropoffs = [
  { date: "Nov 25", location: "Guardhouse A", weight: "1.4kg", reward: "2.80" },
  { date: "Nov 18", location: "Guardhouse A", weight: "0.8kg", reward: "1.60" },
];

export const RecentActivity = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold text-foreground">Recent Activity</h3>
        <button className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2">
        {recentDropoffs.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-4 border border-border flex items-center justify-between animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground">{item.location}</p>
                <p className="text-xs text-muted-foreground">{item.date} • {item.weight}</p>
              </div>
            </div>
            <p className="stat-number text-lg text-accent">+RM {item.reward}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
