import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface MobileLayoutProps {
  children: ReactNode;
}

export const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col relative overflow-hidden">
      {/* Subtle background orbs for depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 flex-1 overflow-y-auto pb-24">
        {children}
      </div>
      <BottomNav />
    </div>
  );
};