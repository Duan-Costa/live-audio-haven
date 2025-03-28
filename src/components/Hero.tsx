
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, Mic, Radio, Heart, SkipForward } from "lucide-react";
import AudioPlayer from "./AudioPlayer";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("relative min-h-screen pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#0c1524] via-[#1a2c42] to-[#0c1524]", className)}>
      {/* Logo e Título */}
      <div className="container mx-auto mb-8 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio size={38} className="text-radio-light-blue" />
            <h1 className="text-4xl font-bold text-white">
              RÁDIO<span className="block -mt-1">CONNECT</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-8 text-white">
            <a href="#" className="hover:text-radio-light-blue transition-colors">HOME</a>
            <a href="#" className="hover:text-radio-light-blue transition-colors">AO VIVO</a>
            <a href="#" className="hover:text-radio-light-blue transition-colors">PEDIDOS</a>
            <a href="#" className="hover:text-radio-light-blue transition-colors">EQUIPE</a>
            <a href="#" className="hover:text-radio-light-blue transition-colors">CONTATO</a>
          </div>
          <button className="p-2 rounded-full bg-[#0e1c2f] text-white">
            <span className="sr-only">Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Partículas de luz */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `pulse-slow ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center">
          {/* Área principal com microfone */}
          <div className="w-full max-w-5xl relative">
            {/* Texto lateral esquerdo */}
            <div className="absolute left-0 top-1/3 -translate-y-1/2 text-center md:text-left max-w-[200px] text-white/90">
              <p className="text-lg md:text-xl font-light">
                <span className="text-white/60">com</span> melhor
                <br />
                <span className="text-radio-light-blue">gospel!</span>
              </p>
              <Button 
                size="sm"
                className="mt-4 bg-radio-light-blue hover:bg-radio-blue text-white rounded-full px-6"
              >
                Play now
              </Button>
            </div>
            
            {/* Texto lateral direito */}
            <div className="absolute right-0 top-1/3 -translate-y-1/2 text-center md:text-right max-w-[200px] text-white/90">
              <p className="text-lg md:text-xl font-light">
                <span className="text-radio-light-blue">Connectado</span>
                <br />
                ao melhor
                <br />
                do gospel
              </p>
            </div>

            {/* Onda sonora inferior estilizada */}
            <div className="absolute bottom-0 inset-x-0 h-24 flex items-end justify-center left-0 right-0">
              <div className="w-full h-24 relative">
                <div className="absolute inset-0 flex items-end justify-center">
                  {[...Array(60)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1.5 mx-0.5 bg-radio-light-blue rounded-t-full"
                      style={{ 
                        height: `${5 + Math.sin(i * 0.2) * 20}px`, 
                        opacity: 0.5 + Math.sin(i * 0.2) * 0.5
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Central de microfone com círculos */}
            <div className="relative mx-auto w-full max-w-2xl mt-4 mb-32 rounded-3xl overflow-hidden">
              {/* Gradiente de fundo e efeito de círculos */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a2c42]/95 to-[#0c1524]/95 rounded-3xl"></div>
              
              {/* Círculos decorativos */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-radio-light-blue/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-radio-light-blue/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-radio-light-blue/5 rounded-full"></div>

              <div className="relative p-4 pt-16 pb-20 flex flex-col items-center">
                {/* Banner da parte superior */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-64 text-center">
                  <p className="text-xl font-semibold text-radio-light-blue">
                    AO <span className="text-white">VIVO</span> DA <br/>
                    <span className="text-radio-light-blue">GOSPEL!</span>
                  </p>
                </div>
                
                {/* Imagem do microfone */}
                <div className="relative flex justify-center items-center">
                  <img 
                    src="/lovable-uploads/fd37a76a-47c2-4301-82c2-eb0ee6f2fe3d.png" 
                    alt="Microfone com fones de ouvido" 
                    className="w-80 h-80 object-contain relative z-10"
                  />
                  <div className="absolute z-0 w-40 h-40 rounded-full bg-yellow-400/30 blur-xl"></div>
                </div>
                
                {/* Botão de play central */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 bg-white/90 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[#0c1524] text-3xl pl-0.5">▌▌</span>
                  </div>
                </div>
                
                {/* Banner inferior com mensagem */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4b0e3a]/90 via-[#2b0c46]/90 to-[#4b0e3a]/90 py-3 px-8 rounded-full min-w-[400px] text-center">
                  <p className="text-white font-medium">Connectado ao melhor da MÚSICA GOSPEL</p>
                </div>
              </div>
            </div>

            {/* Cards de pedidos e devocional */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-gradient-to-b from-[#1a2c42] to-[#0c1524] p-4 rounded-2xl flex flex-col items-center text-center border border-radio-light-blue/20">
                <SkipForward size={28} className="text-white mb-2"/>
                <h3 className="text-white font-bold text-lg">PEDIDOS</h3>
                <p className="text-white font-bold">DO VOCÊ</p>
                <p className="text-xs text-white/70 mt-2">Compartilhe suas músicas favoritas</p>
              </div>
              
              <div className="bg-gradient-to-b from-[#1a2c42] to-[#0c1524] p-4 rounded-2xl flex flex-col items-center text-center border border-radio-light-blue/20">
                <Play size={28} className="text-radio-light-blue mb-2" />
                <h3 className="text-white font-bold text-lg">PEDIDOS</h3>
                <p className="text-white font-bold">DE MISHA</p>
                <p className="text-xs text-white/70 mt-2">Um dos nossos sucessos no momento</p>
              </div>
              
              <div className="bg-gradient-to-b from-[#1a2c42] to-[#0c1524] p-4 rounded-2xl flex flex-col items-center text-center border border-radio-light-blue/20">
                <Mic size={28} className="text-yellow-400 mb-2" />
                <h3 className="text-white font-bold text-lg">DEVOCIONAL</h3>
                <p className="text-white font-bold">DO DIA!</p>
                <p className="text-xs text-white/70 mt-2">Ouça a palavra inspiradora</p>
              </div>
              
              <div className="bg-gradient-to-b from-[#1a2c42] to-[#0c1524] p-4 rounded-2xl flex flex-col items-center text-center border border-radio-light-blue/20">
                <Heart size={28} className="text-pink-500 mb-2" />
                <h3 className="text-white font-bold text-lg">DEVOCIONAL</h3>
                <p className="text-white font-bold">DO DIA!</p>
                <p className="text-xs text-white/70 mt-2">Ouça e compartilhe</p>
              </div>
            </div>
            
            {/* Botões inferiores */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <p className="text-radio-light-blue text-xl font-bold">AO VIVO</p>
              
              <Button className="bg-white hover:bg-white/90 text-[#0c1524] px-8 font-bold rounded-full">
                PLAY
              </Button>
              
              <Button className="bg-radio-light-blue hover:bg-radio-blue text-white px-8 font-bold rounded-full">
                READ
              </Button>
              
              <p className="text-white text-xl font-bold">REQUEST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
