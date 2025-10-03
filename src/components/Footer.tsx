import { Link } from 'react-router-dom';
import { MessageCircle, Youtube, Instagram, Hash } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-white text-xl">
                MC
              </div>
              <span className="font-bold text-xl text-gradient">MCStore</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Server Minecraft terbaik dengan komunitas yang ramah dan aktif.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/store" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Store
              </Link>
              <Link to="/support" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Server Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Server Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Java: <span className="font-mono text-foreground">play.mcstore.id</span></p>
              <p>Bedrock: <span className="font-mono text-foreground">play.mcstore.id:19132</span></p>
              <p>Version: 1.20.x</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ikuti Kami</h3>
            <div className="flex space-x-3">
              <a
                href="https://discord.gg/mcstore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 card-hover"
              >
                <Hash className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 card-hover"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@mcstore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 card-hover"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/mcstore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 card-hover"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MCStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
