import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Users, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const Index = () => {
  const whatsappLink = "https://chat.whatsapp.com/JJDa5wz9FrKCtjD54E2m4t?mode=gi_t";

  const handleJoinWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Mesh gradient background */}
      <div className="mesh-bg" />
      
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Ambient glow blobs */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />
      <div className="glow-blob glow-blob-3" />

      {/* Grid lines */}
      <div className="grid-lines" />

      {/* Main Content */}
      <main className="flex min-h-screen items-center justify-center p-6 relative z-10">
        <div className="max-w-lg w-full">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="glass-pill flex items-center gap-2 px-4 py-2 rounded-full">
              <span className="live-dot" />
              <span className="text-sm font-medium text-white/80 tracking-wide">Active community</span>
            </div>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="icon-container">
              <div className="icon-ring" />
              <div className="icon-inner">
                <MessageCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">
              <span className="text-gradient">Flexoo</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-white/50 text-lg mb-10 font-light"
          >
            Join our exclusive WhatsApp group
          </motion.p>

          {/* Glass card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glass-card p-6 rounded-3xl mb-8"
          >
            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { icon: Users, label: "Community" },
                { icon: Shield, label: "Private" },
                { icon: Zap, label: "Active" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 py-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-whatsapp-green" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-white/50 font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Avatar stack */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt=""
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="w-9 h-9 rounded-full border-2 border-black/50 object-cover"
                  />
                ))}
              </div>
              <span className="text-sm text-white/40 font-light">100+ members</span>
            </div>

            {/* CTA Button */}
            <div className="relative">
              <div className="btn-glow-ring" />
              <Button
                size="lg"
                className="relative w-full h-14 text-lg font-semibold rounded-2xl bg-whatsapp-green hover:bg-whatsapp-green/90 text-white shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:shadow-[0_0_60px_rgba(37,211,102,0.4)] transition-all duration-500 z-10 group"
                onClick={handleJoinWhatsApp}
              >
                <span className="flex items-center gap-2">
                  Join WhatsApp
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-white/25 text-xs"
          >
            <p>© 2026 Flexoo. All rights reserved.</p>
          </motion.footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
