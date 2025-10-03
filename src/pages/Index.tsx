import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhCNUNGNiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                Server Minecraft Terbaik
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Bergabunglah dengan
              <span className="block text-gradient">MCStore Community</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rasakan pengalaman bermain Minecraft yang tak terlupakan. Dapatkan ranks eksklusif dan coins untuk meningkatkan permainanmu!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/store">
                <Button size="lg" className="btn-gradient gap-2 shadow-[var(--shadow-purple)] text-lg px-8">
                  Mulai Belanja
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/20 hover:bg-primary/5">
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mengapa Memilih MCStore?</h2>
            <p className="text-muted-foreground text-lg">Nikmati berbagai keuntungan bermain di server kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-12 h-12" />}
              title="Server Aman"
              description="Anti-cheat canggih dan moderasi 24/7 untuk pengalaman bermain yang nyaman"
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12" />}
              title="Performa Tinggi"
              description="Server dengan hardware premium untuk gameplay yang smooth tanpa lag"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12" />}
              title="Komunitas Aktif"
              description="Ribuan player aktif setiap hari dengan berbagai event menarik"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Siap untuk Memulai Petualangan?
            </h2>
            <p className="text-xl text-muted-foreground">
              Dapatkan rank dan coins sekarang untuk pengalaman bermain yang lebih seru!
            </p>
            <Link to="/store">
              <Button size="lg" className="btn-gradient gap-2 shadow-[var(--shadow-purple)] text-lg px-8">
                Lihat Store
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-card border border-border rounded-xl p-8 text-center space-y-4 card-hover group">
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
);

export default Index;
