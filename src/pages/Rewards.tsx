import { MobileLayout } from "@/components/layout/MobileLayout";
import { Gift, ShoppingBag, Sparkles, Star, Leaf, Sun, Home as HomeIcon, Shirt, Coffee, ArrowRight, Wallet, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "beauty", label: "Beauty", icon: Sparkles },
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "solar", label: "Solar", icon: Sun },
  { id: "fashion", label: "Fashion", icon: Shirt },
  { id: "food", label: "Food", icon: Coffee },
];

const products = [
  {
    id: 1,
    name: "Tea Tree Body Wash",
    brand: "The Body Shop",
    category: "beauty",
    originalPrice: 45.00,
    discountedPrice: 38.25,
    discountPercent: 15,
    pointsCost: 38,
    rating: 4.8,
    reviews: 234,
    image: "🧴",
    tag: "Best Seller",
    sustainable: "Vegan & Cruelty-Free",
  },
  {
    id: 2,
    name: "Eco Laundry Detergent",
    brand: "EcoDetergent MY",
    category: "home",
    originalPrice: 28.00,
    discountedPrice: 14.00,
    discountPercent: 50,
    pointsCost: 14,
    rating: 4.6,
    reviews: 189,
    image: "🧺",
    tag: "Buy 1 Free 1",
    sustainable: "Biodegradable",
  },
  {
    id: 3,
    name: "Solar Panel Consultation",
    brand: "SolarHome MY",
    category: "solar",
    originalPrice: 200.00,
    discountedPrice: 0,
    discountPercent: 100,
    pointsCost: 0,
    rating: 4.9,
    reviews: 56,
    image: "☀️",
    tag: "FREE",
    sustainable: "Clean Energy",
  },
  {
    id: 4,
    name: "Bamboo Toothbrush Set",
    brand: "EcoBrush",
    category: "home",
    originalPrice: 18.00,
    discountedPrice: 12.60,
    discountPercent: 30,
    pointsCost: 13,
    rating: 4.7,
    reviews: 412,
    image: "🪥",
    tag: "Popular",
    sustainable: "Zero Waste",
  },
  {
    id: 5,
    name: "Organic Shea Butter",
    brand: "The Body Shop",
    category: "beauty",
    originalPrice: 65.00,
    discountedPrice: 55.25,
    discountPercent: 15,
    pointsCost: 55,
    rating: 4.9,
    reviews: 678,
    image: "✨",
    tag: "Premium",
    sustainable: "Fair Trade",
  },
  {
    id: 6,
    name: "Recycled Tote Bag",
    brand: "GreenThread",
    category: "fashion",
    originalPrice: 35.00,
    discountedPrice: 24.50,
    discountPercent: 30,
    pointsCost: 25,
    rating: 4.5,
    reviews: 145,
    image: "👜",
    sustainable: "Recycled Materials",
  },
  {
    id: 7,
    name: "Organic Coffee Beans",
    brand: "EcoBrew",
    category: "food",
    originalPrice: 42.00,
    discountedPrice: 33.60,
    discountPercent: 20,
    pointsCost: 34,
    rating: 4.8,
    reviews: 289,
    image: "☕",
    tag: "New",
    sustainable: "Rainforest Alliance",
  },
  {
    id: 8,
    name: "Reusable Food Wraps",
    brand: "BeeWrap MY",
    category: "home",
    originalPrice: 25.00,
    discountedPrice: 17.50,
    discountPercent: 30,
    pointsCost: 18,
    rating: 4.6,
    reviews: 334,
    image: "🍯",
    sustainable: "Beeswax Natural",
  },
];

const Rewards = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const walletBalance = 18.00;

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <MobileLayout>
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="px-5 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display font-bold text-2xl text-foreground flex items-center gap-2">
                <Gift className="w-6 h-6 text-accent" />
                Green Rewards
              </h1>
              <p className="text-sm text-muted-foreground">Spend your eco-earnings sustainably</p>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-accent-light to-accent/20 rounded-full px-3 py-1.5 border border-accent/30">
              <Wallet className="w-4 h-4 text-accent" />
              <span className="font-bold text-accent">RM {walletBalance.toFixed(2)}</span>
            </div>
          </div>
        </header>

        <main className="px-5 space-y-5 pb-6">
          {/* Partner Brands Banner */}
          <div className="relative overflow-hidden rounded-2xl gradient-teal p-4 text-secondary-foreground animate-slide-up">
            <div className="shimmer absolute inset-0 rounded-2xl" />
            <div className="absolute w-24 h-24 bg-white/10 rounded-full -top-10 -right-10 animate-float" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-5 h-5" />
                <span className="font-semibold">Sustainable Partners</span>
              </div>
              <p className="text-sm opacity-90">Shop from 50+ eco-conscious brands and earn while you save the planet</p>
              <div className="flex gap-2 mt-3">
                {["The Body Shop", "SolarHome", "EcoBrew"].map((brand) => (
                  <span key={brand} className="text-[10px] glass rounded-full px-2 py-1 font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="animate-slide-up" style={{ animationDelay: "50ms" }}>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-button"
                        : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: "100ms" }}>
            {filteredProducts.map((product, index) => {
              const canAfford = walletBalance >= product.pointsCost;
              return (
                <div
                  key={product.id}
                  className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-secondary/30 hover:shadow-card-hover hover:scale-[1.02] cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${(index + 2) * 50}ms` }}
                >
                  {/* Product Image Area */}
                  <div className="relative bg-gradient-to-br from-muted to-muted/50 p-4 text-center">
                    {product.tag && (
                      <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        product.tag === "FREE" || product.tag === "Buy 1 Free 1"
                          ? "bg-accent text-accent-foreground"
                          : product.tag === "New"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {product.tag}
                      </span>
                    )}
                    <span className="text-4xl">{product.image}</span>
                  </div>

                  {/* Product Info */}
                  <div className="p-3 space-y-2">
                    <div>
                      <p className="text-[10px] text-muted-foreground font-medium">{product.brand}</p>
                      <p className="font-semibold text-sm text-foreground line-clamp-2 leading-tight">{product.name}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      <span className="text-xs text-foreground font-medium">{product.rating}</span>
                      <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Sustainable Badge */}
                    <div className="flex items-center gap-1">
                      <Leaf className="w-3 h-3 text-secondary" />
                      <span className="text-[10px] text-secondary font-medium">{product.sustainable}</span>
                    </div>

                    {/* Price */}
                    <div className="pt-1 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          {product.discountedPrice > 0 ? (
                            <>
                              <p className="text-xs text-muted-foreground line-through">RM {product.originalPrice.toFixed(2)}</p>
                              <p className="stat-number text-lg text-gradient-gold">RM {product.discountedPrice.toFixed(2)}</p>
                            </>
                          ) : (
                            <p className="stat-number text-lg text-accent">FREE</p>
                          )}
                        </div>
                        <span className="text-[10px] font-bold text-white bg-accent rounded-full px-2 py-0.5">
                          -{product.discountPercent}%
                        </span>
                      </div>
                    </div>

                    {/* Redeem Button */}
                    <Button 
                      size="sm" 
                      variant={canAfford ? "teal" : "outline"}
                      className="w-full text-xs"
                      disabled={!canAfford}
                    >
                      {canAfford ? (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Redeem Now
                        </>
                      ) : (
                        <>Need RM {(product.pointsCost - walletBalance).toFixed(2)} more</>
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* How It Works */}
          <div className="bg-card rounded-2xl p-4 border border-border space-y-3 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              How Green Rewards Work
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-secondary-light text-secondary text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
                <span>Recycle UCO at your guardhouse hub</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-secondary-light text-secondary text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
                <span>Earn RM 2.00 per KG into your wallet</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-secondary-light text-secondary text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
                <span>Redeem exclusive discounts from eco-brands</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MobileLayout>
  );
};

export default Rewards;
