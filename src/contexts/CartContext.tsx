import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  type: 'coin' | 'rank';
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  discount: number;
  applyDiscount: (code: string) => void;
  discountCode: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState('');

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        toast.success('Jumlah item diperbarui!');
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast.success('Item ditambahkan ke keranjang!');
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
    toast.info('Item dihapus dari keranjang');
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems(prev =>
      prev.map(i => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscount(0);
    setDiscountCode('');
  };

  const applyDiscount = (code: string) => {
    const validCodes: { [key: string]: number } = {
      'WELCOME10': 10,
      'SALE20': 20,
      'VIP30': 30,
      'NEWBIE15': 15,
    };

    const discountPercent = validCodes[code.toUpperCase()];
    if (discountPercent) {
      setDiscount(discountPercent);
      setDiscountCode(code.toUpperCase());
      toast.success(`Kode promo ${code.toUpperCase()} berhasil diterapkan! Diskon ${discountPercent}%`);
    } else {
      toast.error('Kode promo tidak valid');
    }
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        discount,
        applyDiscount,
        discountCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
