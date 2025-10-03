import { Coins, Crown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Store = () => {
  const coinPackages = [
    {
      id: 'coin-1000',
      name: '1,000 Coins',
      price: 10000,
      description: 'Paket coins starter',
      features: ['1,000 Coins', 'Instant delivery', '24/7 Support'],
      type: 'coin' as const,
    },
    {
      id: 'coin-5000',
      name: '5,000 Coins',
      price: 45000,
      description: 'Paket coins populer',
      features: ['5,000 Coins', '+500 Bonus Coins', 'Instant delivery', '24/7 Support'],
      type: 'coin' as const,
      popular: true,
    },
    {
      id: 'coin-10000',
      name: '10,000 Coins',
      price: 85000,
      description: 'Paket coins terbaik',
      features: ['10,000 Coins', '+1,500 Bonus Coins', 'Instant delivery', 'Priority Support'],
      type: 'coin' as const,
    },
  ];

  const rankPackages = [
    {
      id: 'rank-vip',
      name: 'VIP',
      price: 50000,
      description: 'Rank VIP dengan berbagai keuntungan',
      features: [
        'VIP prefix',
        '3 sethome',
        '/hat command',
        'Kit VIP setiap hari',
        'Priority login',
      ],
      type: 'rank' as const,
    },
    {
      id: 'rank-vipplus',
      name: 'VIP+',
      price: 100000,
      description: 'Rank VIP+ dengan lebih banyak fitur',
      features: [
        'VIP+ prefix',
        '5 sethome',
        '/hat & /nick command',
        'Kit VIP+ setiap hari',
        'Priority login',
        'Access to VIP+ world',
      ],
      type: 'rank' as const,
      popular: true,
    },
    {
      id: 'rank-mvp',
      name: 'MVP',
      price: 200000,
      description: 'Rank tertinggi dengan semua keuntungan',
      features: [
        'MVP prefix dengan warna',
        '10 sethome',
        'All commands',
        'Kit MVP setiap hari',
        'Highest priority login',
        'Access to semua world',
        'Custom particle effects',
      ],
      type: 'rank' as const,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">Store</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Pilih paket coins dan ranks yang sesuai dengan kebutuhanmu
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="coins" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="coins" className="gap-2">
                  <Coins className="w-4 h-4" />
                  Coins
                </TabsTrigger>
                <TabsTrigger value="ranks" className="gap-2">
                  <Crown className="w-4 h-4" />
                  Ranks
                </TabsTrigger>
              </TabsList>

              <TabsContent value="coins" className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coinPackages.map((pkg) => (
                    <ProductCard key={pkg.id} {...pkg} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ranks" className="animate-fade-in">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rankPackages.map((pkg) => (
                    <ProductCard key={pkg.id} {...pkg} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Store;
