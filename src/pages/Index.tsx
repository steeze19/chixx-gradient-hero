import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const whatsappLink = "https://chat.whatsapp.com/J2m6LRi1hCg5rZZ5L5qF4P";

  const handleJoinWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* iOS 26 Style Background */}
      <div className="ios-bg" />
      
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Sparkle particles */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`sparkle sparkle-${(i % 4) + 1}`} style={{
          left: `${10 + (i * 7) % 80}%`,
          top: `${5 + (i * 11) % 90}%`,
          animationDelay: `${i * 0.5}s`
        }} />
      ))}

      {/* Main Content */}
      <main className="flex min-h-screen items-center justify-center p-4 relative z-10">
        <div className="text-center space-y-10 animate-fade-in-up">
          {/* WhatsApp Icon */}
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-full bg-whatsapp-green/20 backdrop-blur-xl border border-whatsapp-green/30 flex items-center justify-center shadow-[0_0_60px_rgba(37,211,102,0.3)]">
              <MessageCircle className="w-16 h-16 text-whatsapp-green" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              WhatsApp
            </h1>
            <p className="text-white/60 text-lg">
              Join our community
            </p>
          </div>

          {/* Single CTA Button */}
          <Button
            size="lg"
            className="h-16 px-16 text-xl font-semibold rounded-full bg-whatsapp-green hover:bg-whatsapp-green/90 text-white shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] transition-all duration-300"
            onClick={handleJoinWhatsApp}
          >
            Join WhatsApp
          </Button>

          {/* Footer */}
          <footer className="pt-10 text-white/40 text-sm">
            <p>© 2025 Chixx9ja. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
