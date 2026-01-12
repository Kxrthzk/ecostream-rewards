import { MobileLayout } from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, ArrowUpRight, Wallet as WalletIcon, ExternalLink, Sparkles, TrendingUp, Gift, ShoppingBag } from "lucide-react";

const transactions = [
  { id: 1, date: "Nov 25, 2024", type: "credit", description: "Guardhouse A Drop-off (1.4kg)", amount: "2.80", rate: "RM 2.00/kg", isNew: true },
  { id: 2, date: "Nov 18, 2024", type: "credit", description: "Guardhouse A Drop-off (0.8kg)", amount: "1.60", rate: "RM 2.00/kg", isNew: false },
  { id: 3, date: "Nov 10, 2024", type: "credit", description: "Guardhouse A Drop-off (2.1kg)", amount: "4.20", rate: "RM 2.00/kg", isNew: false },
  { id: 4, date: "Nov 5, 2024", type: "debit", description: "Cash Out to TnG eWallet", amount: "10.00", isNew: false },
  { id: 5, date: "Oct 28, 2024", type: "credit", description: "Guardhouse A Drop-off (1.9kg)", amount: "3.80", rate: "RM 2.00/kg", isNew: false },
];

const greenRewards = [
  { name: "The Body Shop", discount: "15% off", category: "Beauty" },
  { name: "SolarHome MY", discount: "RM 200 off", category: "Solar" },
  { name: "EcoDetergent", discount: "Buy 1 Free 1", category: "Home" },
];

const Wallet = () => {
  return (
    <MobileLayout>
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-6 pb-4">
          <h1 className="font-display font-bold text-2xl text-foreground">My Wallet</h1>
          <p className="text-sm text-muted-foreground">Earn & spend your eco-rewards</p>
        </header>

        <main className="px-5 space-y-6 pb-6">
          {/* Balance Card */}
          <div className="relative overflow-hidden rounded-3xl gradient-reward p-6 text-accent-foreground shadow-reward animate-slide-up group">
            {/* Animated orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-32 h-32 bg-white/15 rounded-full -top-10 -right-10 animate-float" />
              <div className="absolute w-24 h-24 bg-white/10 rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDelay: "1.5s" }} />
              <div className="absolute w-16 h-16 bg-white/10 rounded-full top-1/3 right-1/4 animate-float" style={{ animationDelay: "0.5s" }} />
            </div>
            
            {/* Shimmer effect */}
            <div className="shimmer absolute inset-0 rounded-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 glass rounded-full px-3 py-1.5">
                  <WalletIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Available Balance</span>
                </div>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              
              <p className="stat-number text-6xl mb-2 drop-shadow-lg tracking-tighter">RM 18.00</p>
              
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-4 h-4 text-white/80" />
                <span className="text-sm opacity-80">+RM 8.00 this month</span>
              </div>
              
              <Button 
                variant="card" 
                size="lg" 
                className="w-full bg-white/95 text-accent-foreground hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="font-semibold">Cash Out to Touch 'n Go</span>
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="group relative overflow-hidden bg-gradient-to-br from-secondary-light to-secondary/10 rounded-2xl p-4 border border-secondary/30 text-center transition-all duration-300 hover:shadow-glow-secondary hover:scale-[1.02] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="text-xs text-muted-foreground mb-1">Total Earned</p>
                <p className="stat-number text-xl text-gradient">RM 42.40</p>
                <p className="text-[10px] text-muted-foreground mt-1">21.2 kg recycled</p>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-br from-primary-light to-primary/10 rounded-2xl p-4 border border-primary/30 text-center transition-all duration-300 hover:shadow-glow-primary hover:scale-[1.02] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="text-xs text-muted-foreground mb-1">Cash Outs</p>
                <p className="stat-number text-xl text-foreground">RM 24.40</p>
                <p className="text-[10px] text-muted-foreground mt-1">to TnG eWallet</p>
              </div>
            </div>
          </div>

          {/* Green Rewards Marketplace */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "150ms" }}>
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                <Gift className="w-4 h-4 text-accent" />
                Green Rewards
              </h3>
              <span className="text-[10px] font-medium text-accent bg-accent-light px-2 py-1 rounded-full">NEW</span>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {greenRewards.map((reward, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 w-32 bg-card rounded-xl p-3 border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-light to-accent/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBag className="w-4 h-4 text-accent" />
                  </div>
                  <p className="font-medium text-xs text-foreground truncate">{reward.name}</p>
                  <p className="text-[10px] text-accent font-semibold">{reward.discount}</p>
                  <p className="text-[10px] text-muted-foreground">{reward.category}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground text-center">Spend your balance on sustainable brands</p>
          </div>

          {/* Transaction History */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-display font-semibold text-foreground">Transaction History</h3>
            
            <div className="space-y-2">
              {transactions.map((tx, index) => (
                <div
                  key={tx.id}
                  className="group relative overflow-hidden bg-card rounded-xl p-4 border border-border flex items-center justify-between transition-all duration-300 hover:border-secondary/30 hover:shadow-card-hover hover:scale-[1.01] cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${(index + 3) * 50}ms` }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <div className={`relative w-11 h-11 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 ${
                      tx.type === "credit" 
                        ? "bg-gradient-to-br from-secondary-light to-secondary/20" 
                        : "bg-gradient-to-br from-primary-light to-primary/20"
                    }`}>
                      {tx.type === "credit" ? (
                        <ArrowDownRight className="w-5 h-5 text-secondary" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      )}
                      {tx.isNew && (
                        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-card animate-pulse" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm text-foreground">{tx.description}</p>
                        {tx.isNew && (
                          <span className="flex items-center gap-0.5 text-[10px] font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded-full">
                            <Sparkles className="w-2.5 h-2.5" />
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                        {tx.rate && (
                          <span className="text-[10px] text-muted-foreground">• {tx.rate}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className={`relative z-10 stat-number text-lg ${
                    tx.type === "credit" ? "text-gradient" : "text-muted-foreground"
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
