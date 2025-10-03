import { ShoppingCart, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { useCart, CartItem } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  type: 'coin' | 'rank';
  popular?: boolean;
}

const ProductCard = ({ id, name, price, description, features, type, popular }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const item: Omit<CartItem, 'quantity'> = {
      id,
      name,
      price,
      type,
    };
    addToCart(item);
  };

  return (
    <Card className="relative overflow-hidden card-hover border-border bg-card group">
      {popular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-primary to-accent text-white border-none shadow-lg">
            <Sparkles className="w-3 h-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="relative">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gradient">Rp {price.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="relative">
        <Button
          className="w-full btn-gradient gap-2 shadow-[var(--shadow-purple)]"
          size="lg"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          Tambah ke Keranjang
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
