import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const Index = () => {
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | null>(null);

  const whatsappLink = "https://chat.whatsapp.com/BccA4e5DDEIKvCcLB85Eoc";
  const telegramLink = "https://t.me/officialbluepay2025";

  const handleStartChatting = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  const handleJoinWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  const handleJoinTelegram = () => {
    window.open(telegramLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Liquid Gradient Background */}
      <div className="liquid-bg" />

      {/* Main Content */}
      <main className="flex min-h-screen items-center justify-center p-4 md:p-6">
        <article
          className="glass-card w-full max-w-[420px] rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* WhatsApp Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <MessageCircle className="w-14 h-14 text-primary-foreground" strokeWidth={2} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            WhatsApp Chat & Earn
          </h1>

          {/* Online Now Section */}
          <div
            className="mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-lg tracking-wide">ONLINE NOW</span>
            </div>

            {/* Avatars */}
            <div className="flex justify-center gap-4">
              {[avatar1, avatar2, avatar3, avatar4].map((avatar, index) => (
                <div key={index} className="relative">
                  <img
                    src={avatar}
                    alt={`Online user ${index + 1}`}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gender Selection */}
          <div
            className="mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
              Are you Male or Female?
            </h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className={`flex-1 h-16 text-xl font-semibold rounded-2xl transition-all duration-200 ${
                  selectedGender === "male"
                    ? "bg-accent border-primary border-2 text-accent-foreground"
                    : "bg-white/50 border-gray-300 text-gray-700 hover:bg-accent/50"
                }`}
                onClick={() => setSelectedGender("male")}
              >
                Male
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`flex-1 h-16 text-xl font-semibold rounded-2xl transition-all duration-200 ${
                  selectedGender === "female"
                    ? "bg-accent border-primary border-2 text-accent-foreground"
                    : "bg-white/50 border-gray-300 text-gray-700 hover:bg-accent/50"
                }`}
                onClick={() => setSelectedGender("female")}
              >
                Female
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="space-y-4 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="w-full h-16 text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleStartChatting}
            >
              START CHATTING
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full h-16 text-xl font-bold rounded-2xl bg-gray-900 hover:bg-gray-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleJoinWhatsApp}
            >
              JOIN WHATSAPP GROUP
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full h-16 text-xl font-bold rounded-2xl bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleJoinTelegram}
            >
              JOIN TELEGRAM
            </Button>
          </div>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-600 space-y-2">
            <p>© 2025 Chixx9ja. All rights reserved.</p>
            <a
              href="#privacy"
              className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              Privacy Policy
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default Index;
