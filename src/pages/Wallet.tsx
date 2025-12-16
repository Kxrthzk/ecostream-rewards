import { MobileLayout } from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, ArrowUpRight, Wallet as WalletIcon, ExternalLink, CheckCircle2 } from "lucide-react";

const transactions = [
  { id: 1, date: "Nov 25, 2024", type: "credit", description: "Guardhouse Drop-off (1.4kg)", amount: "2.80" },
  { id: 2, date: "Nov 18, 2024", type: "credit", description: "Guardhouse Drop-off (0.8kg)", amount: "1.60" },
  { id: 3, date: "Nov 10, 2024", type: "credit", description: "Guardhouse Drop-off (2.1kg)", amount: "4.20" },
  { id: 4, date: "Nov 5, 2024", type: "debit", description: "Cash Out to TnG", amount: "10.00" },
  { id: 5, date: "Oct 28, 2024", type: "credit", description: "Guardhouse Drop-off (1.9kg)", amount: "3.80" },
];

const Wallet = () => {
  return (
    <MobileLayout>
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-6 pb-4">
          <h1 className="font-display font-bold text-2xl text-foreground">My Wallet</h1>
          <p className="text-sm text-muted-foreground">Manage your eco-rewards</p>
        </header>

        <main className="px-5 space-y-6 pb-6">
          {/* Balance Card */}
          <div className="relative overflow-hidden rounded-3xl gradient-reward p-6 text-accent-foreground shadow-lg animate-slide-up">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <WalletIcon className="w-5 h-5" />
                <span className="text-sm font-medium opacity-90">Available Balance</span>
              </div>
              
              <p className="stat-number text-5xl mb-6">RM 18.00</p>
              
              <Button 
                variant="card" 
                size="lg" 
                className="w-full bg-white/95 text-accent-foreground hover:bg-white"
              >
                <ExternalLink className="w-5 h-5" />
                Cash Out to Touch 'n Go eWallet
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="bg-secondary-light rounded-2xl p-4 border border-secondary/20 text-center">
              <p className="text-xs text-muted-foreground mb-1">Total Earned</p>
              <p className="stat-number text-xl text-foreground">RM 42.40</p>
            </div>
            <div className="bg-primary-light rounded-2xl p-4 border border-primary/20 text-center">
              <p className="text-xs text-muted-foreground mb-1">Cash Outs</p>
              <p className="stat-number text-xl text-foreground">RM 24.40</p>
            </div>
          </div>

          {/* Transaction History */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-display font-semibold text-foreground">Transaction History</h3>
            
            <div className="space-y-2">
              {transactions.map((tx, index) => (
                <div
                  key={tx.id}
                  className="bg-card rounded-xl p-4 border border-border flex items-center justify-between animate-slide-up"
                  style={{ animationDelay: `${(index + 3) * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === "credit" 
                        ? "bg-secondary-light" 
                        : "bg-primary-light"
                    }`}>
                      {tx.type === "credit" ? (
                        <ArrowDownRight className="w-5 h-5 text-secondary" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">{tx.description}</p>
                      <p className="text-xs text-muted-foreground">{tx.date}</p>
                    </div>
                  </div>
                  <p className={`stat-number text-lg ${
                    tx.type === "credit" ? "text-secondary" : "text-muted-foreground"
                  }`}>
                    {tx.type === "credit" ? "+" : "-"}RM {tx.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </MobileLayout>
  );
};

export default Wallet;
