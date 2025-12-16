import { QrCode, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ActionButtons = () => {
  return (
    <div className="space-y-3">
      {/* Primary CTA */}
      <Button variant="ocean" size="xl" className="w-full rounded-2xl">
        <QrCode className="w-6 h-6" />
        <span>Scan Drop-off at Guardhouse</span>
      </Button>
      
      {/* Secondary CTA */}
      <Button variant="card" size="lg" className="w-full rounded-2xl">
        <Package className="w-5 h-5 text-secondary" />
        <span>Request Empty Starter Kit (1.5L)</span>
      </Button>
    </div>
  );
};
