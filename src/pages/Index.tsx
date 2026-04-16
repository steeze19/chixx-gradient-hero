import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Users, Shield, Zap, Gift, TrendingUp, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const Index = () => {
  const whatsappLink = "https://chat.whatsapp.com/JJDa5wz9FrKCtjD54E2m4t?mode=hq1tcli";

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
              <span className="text-sm font-medium text-white/80 tracking-wide">🔥 Trending now · Limited spots</span>
            </div>
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
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
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-3">
              <span className="text-gradient">Flexoo</span>
            </h1>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-whatsapp-green/10 border border-whatsapp-green/20">
              <Sparkles className="w-3 h-3 text-whatsapp-green" />
              <span className="text-xs font-medium text-whatsapp-green">Exclusive Insider Access</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-white/60 text-lg mb-8 font-light leading-relaxed px-2"
          >
            Get <span className="text-white font-medium">daily winning tips</span>, premium drops & insider deals — straight to your WhatsApp.
          </motion.p>

          {/* Glass card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glass-card p-6 rounded-3xl mb-6"
          >
            {/* Benefits */}
            <div className="space-y-3 mb-6">
              {[
                { icon: Gift, label: "Free daily premium tips & drops" },
                { icon: TrendingUp, label: "Real wins from real members" },
                { icon: Shield, label: "100% private & spam-free" },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="w-9 h-9 rounded-xl bg-whatsapp-green/15 border border-whatsapp-green/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-whatsapp-green" strokeWidth={2} />
                  </div>
                  <span className="text-sm text-white/85 font-medium">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-between mb-6 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt=""
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                      className="w-8 h-8 rounded-full border-2 border-black object-cover"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-white font-semibold leading-tight">500+ members</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-[10px] text-white/50 ml-1">Loved by all</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-whatsapp-green/15">
                <span className="w-1.5 h-1.5 rounded-full bg-whatsapp-green animate-pulse" />
                <span className="text-[10px] font-semibold text-whatsapp-green uppercase tracking-wider">Live</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative">
              <div className="btn-glow-ring" />
              <Button
                size="lg"
                className="relative w-full h-14 text-lg font-bold rounded-2xl bg-whatsapp-green hover:bg-whatsapp-green/90 text-white shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:shadow-[0_0_60px_rgba(37,211,102,0.4)] transition-all duration-500 z-10 group"
                onClick={handleJoinWhatsApp}
              >
                <span className="flex items-center gap-2">
                  Join Free Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            <p className="text-center text-[11px] text-white/40 mt-3 font-light">
              ⚡ Instant access · No fees · Leave anytime
            </p>
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
