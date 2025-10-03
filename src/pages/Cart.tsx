import { useState } from 'react';
import { Trash2, ShoppingCart, MessageCircle, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, discount, applyDiscount, discountCode, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');

  const discountAmount = (total * discount) / 100;
  const finalTotal = total - discountAmount;

  const handleCheckout = () => {
    if (!user) {
      toast.error('Silakan login terlebih dahulu');
      navigate('/login');
      return;
    }

    if (items.length === 0) {
      toast.error('Keranjang masih kosong');
      return;
    }

    // Format message for WhatsApp
    const itemsList = items
      .map((item) => `- ${item.name} (x${item.quantity}) = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`)
      .join('\n');

    const message = `Halo Admin, saya mau order:
    
Username: ${user.username}
Edition: ${user.edition.toUpperCase()}

Paket yang dipesan:
${itemsList}

${discount > 0 ? `Kode Promo: ${discountCode} (-${discount}%)\nDiskon: Rp ${discountAmount.toLocaleString('id-ID')}\n` : ''}
Total: Rp ${finalTotal.toLocaleString('id-ID')}

Terima kasih!`;

    const whatsappUrl = `https://wa.me/628123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after checkout
    clearCart();
    toast.success('Pesanan dikirim ke WhatsApp!');
  };

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      applyDiscount(promoCode);
      setPromoCode('');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Keranjang Kosong</h2>
            <p className="text-muted-foreground">Belum ada item di keranjang belanja Anda</p>
            <Button className="btn-gradient" onClick={() => navigate('/store')}>
              Mulai Belanja
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Keranjang Belanja</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground capitalize">{item.type}</p>
                        <p className="text-lg font-semibold text-primary mt-2">
                          Rp {item.price.toLocaleString('id-ID')}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>

                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Ringkasan Belanja</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Promo Code */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Kode Promo
                    </label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Masukkan kode promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={discount > 0}
                      />
                      <Button
                        variant="outline"
                        onClick={handleApplyPromo}
                        disabled={discount > 0 || !promoCode.trim()}
                      >
                        Terapkan
                      </Button>
                    </div>
                    {discount > 0 && (
                      <p className="text-sm text-green-600 font-medium">
                        ✓ Kode "{discountCode}" diterapkan (-{discount}%)
                      </p>
                    )}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">Rp {total.toLocaleString('id-ID')}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Diskon ({discount}%)</span>
                        <span className="font-medium text-green-600">
                          -Rp {discountAmount.toLocaleString('id-ID')}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>Total</span>
                      <span className="text-gradient">Rp {finalTotal.toLocaleString('id-ID')}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full btn-gradient gap-2 shadow-[var(--shadow-purple)]"
                    size="lg"
                    onClick={handleCheckout}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Bayar lewat WhatsApp
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Dengan melakukan checkout, pesanan akan dikirim ke WhatsApp admin
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
