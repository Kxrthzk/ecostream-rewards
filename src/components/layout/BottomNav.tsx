import { Home, Wallet, BarChart3, Route, Gift } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Wallet, label: "Wallet", path: "/wallet" },
  { icon: Gift, label: "Rewards", path: "/rewards" },
  { icon: BarChart3, label: "Impact", path: "/impact" },
  { icon: Route, label: "Journey", path: "/traceability" },
];

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-card/80 backdrop-blur-xl border-t border-border/50" />
      
      <div className="relative max-w-[430px] mx-auto px-2">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "relative flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Active indicator pill */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-light to-primary/5 rounded-2xl animate-scale-in" />
                )}
                
                {/* Active glow */}
                {isActive && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full shadow-glow-primary blur-sm" />
                )}
                
                <div className="relative z-10">
                  <item.icon
                    className={cn(
                      "w-6 h-6 transition-all duration-300",
                      isActive && "scale-110 drop-shadow-sm"
                    )}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </div>
                <span className={cn(
                  "relative z-10 text-xs font-medium transition-all duration-300",
                  isActive && "font-semibold"
                )}>
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
      {/* Safe area for iOS */}
      <div className="h-safe-area-inset-bottom bg-transparent" />
    </nav>
  );
};