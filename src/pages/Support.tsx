import { MessageCircle, Mail, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Support = () => {
  const supportChannels = [
    {
      icon: <Hash className="w-12 h-12" />,
      title: 'Discord',
      description: 'Join server Discord kami untuk bantuan cepat dan update terbaru',
      action: 'Join Discord',
      link: 'https://discord.gg/mcstore',
      color: 'from-[#5865F2] to-[#7289DA]',
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: 'WhatsApp',
      description: 'Hubungi admin via WhatsApp untuk support personal',
      action: 'Chat WhatsApp',
      link: 'https://wa.me/628123456789',
      color: 'from-[#25D366] to-[#128C7E]',
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: 'Email',
      description: 'Kirim email untuk pertanyaan detail atau laporan',
      action: 'Kirim Email',
      link: 'mailto:support@mcstore.id',
      color: 'from-primary to-accent',
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
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">Support</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Butuh bantuan? Kami siap membantu Anda 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="card-hover border-primary/20 group">
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${channel.color} bg-opacity-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {channel.icon}
                    </div>
                    <CardTitle className="text-2xl">{channel.title}</CardTitle>
                    <CardDescription className="text-base">{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href={channel.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full btn-gradient shadow-[var(--shadow-purple)]">
                        {channel.action}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Umum</h2>
              
              <div className="space-y-6">
                <FAQItem
                  question="Bagaimana cara melakukan pembayaran?"
                  answer="Setelah memilih paket, Anda akan diarahkan ke WhatsApp untuk konfirmasi pembayaran dengan admin."
                />
                <FAQItem
                  question="Berapa lama proses pengiriman?"
                  answer="Setelah pembayaran dikonfirmasi, coins atau rank akan diberikan dalam waktu maksimal 5-10 menit."
                />
                <FAQItem
                  question="Apakah bisa refund?"
                  answer="Refund hanya dapat dilakukan jika terjadi kesalahan dari pihak server. Hubungi admin untuk detail lebih lanjut."
                />
                <FAQItem
                  question="Apakah kode promo berlaku untuk semua paket?"
                  answer="Ya, kode promo dapat digunakan untuk semua paket coins dan ranks yang tersedia."
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <Card className="card-hover">
    <CardHeader>
      <CardTitle className="text-lg">{question}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{answer}</p>
    </CardContent>
  </Card>
);

export default Support;
