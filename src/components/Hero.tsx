
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AudioPlayer from "./AudioPlayer";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden", className)}>
      {/* Gradiente de fundo colorido */}
      <div className="absolute inset-0 bg-gradient-to-br from-radio-blue/20 via-purple-500/10 to-pink-500/10 -z-10" />
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
          alt="Fundo musical" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Círculos abstratos coloridos */}
      <div className="absolute top-20 right-[5%] w-64 h-64 rounded-full bg-gradient-to-r from-radio-blue/30 to-purple-500/30 blur-xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 left-[10%] w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/30 to-yellow-500/30 blur-xl -z-10 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10 animate-fade-in">
            <h5 className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-radio-blue/20 text-radio-blue rounded-full backdrop-blur-sm">
              Rádio Ao Vivo 24/7
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-radio-black mb-6 leading-tight">
              Ouça <span className="text-radio-blue">Mensagens</span> <span className="text-purple-600">Cristãs</span> <span className="text-pink-600">Inspiradoras</span>
            </h1>
            <p className="text-radio-gray-700 text-lg mb-8 max-w-lg">
              Junte-se à nossa comunidade para transmissões ao vivo de adoração, mensagens inspiradoras e música que fortalecem sua fé e te aproximam de Deus.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-radio-blue to-purple-600 hover:from-radio-dark-blue hover:to-purple-700 text-white font-medium"
                asChild
              >
                <a href="#listen">Ouça Agora</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-radio-blue text-radio-blue hover:bg-radio-blue/5"
                asChild
              >
                <a href="#schedule">Ver Programação</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-[45%] animate-fade-in relative rounded-2xl overflow-hidden shadow-xl" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-radio-blue/20 to-purple-600/20 backdrop-blur-sm z-10"></div>
            <div className="relative z-20 p-6">
              <AudioPlayer />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
              alt="Música e adoração" 
              className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
