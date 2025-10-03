import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Login = () => {
  const [username, setUsername] = useState('');
  const [edition, setEdition] = useState<'java' | 'bedrock'>('java');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast.error('Username tidak boleh kosong');
      return;
    }

    if (username.length < 3) {
      toast.error('Username minimal 3 karakter');
      return;
    }

    login(username.trim(), edition);
    toast.success(`Login berhasil! Selamat datang, ${username}`);
    navigate('/store');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto card-hover border-primary/20">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-3xl font-bold text-gradient">Login Player</CardTitle>
              <CardDescription className="text-base">
                Masukkan username Minecraft kamu untuk melanjutkan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-base font-semibold">
                    Username Minecraft
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-semibold">Edition</Label>
                  <RadioGroup value={edition} onValueChange={(value) => setEdition(value as 'java' | 'bedrock')}>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-primary/5 transition-colors cursor-pointer">
                      <RadioGroupItem value="java" id="java" />
                      <Label htmlFor="java" className="flex-1 cursor-pointer">
                        <div>
                          <div className="font-semibold">Java Edition</div>
                          <div className="text-sm text-muted-foreground">Untuk PC/Mac/Linux</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-primary/5 transition-colors cursor-pointer">
                      <RadioGroupItem value="bedrock" id="bedrock" />
                      <Label htmlFor="bedrock" className="flex-1 cursor-pointer">
                        <div>
                          <div className="font-semibold">Bedrock Edition</div>
                          <div className="text-sm text-muted-foreground">Untuk Mobile/Console/Win10</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full btn-gradient h-12 text-lg shadow-[var(--shadow-purple)]">
                  Login
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Belum punya akun? Daftar langsung di server!
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="max-w-md mx-auto mt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">Server IP:</p>
            <div className="space-y-1">
              <p className="font-mono font-semibold">Java: play.mcstore.id</p>
              <p className="font-mono font-semibold">Bedrock: play.mcstore.id:19132</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
