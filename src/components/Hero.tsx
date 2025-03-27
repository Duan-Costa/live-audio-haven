
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AudioPlayer from "./AudioPlayer";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden", className)}>
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-radio-blue/5 to-transparent -z-10" />
      
      {/* Círculos abstratos */}
      <div className="absolute top-20 right-[5%] w-64 h-64 rounded-full bg-radio-blue/5 -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 left-[10%] w-40 h-40 rounded-full bg-radio-blue/5 -z-10 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10 animate-fade-in">
            <h5 className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-radio-blue/10 text-radio-blue rounded-full">
              Rádio Ao Vivo 24/7
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-radio-black mb-6 leading-tight">
              Ouça <span className="text-radio-blue">Mensagens</span> Cristãs Inspiradoras
            </h1>
            <p className="text-radio-gray-700 text-lg mb-8 max-w-lg">
              Junte-se à nossa comunidade para transmissões ao vivo de adoração, mensagens inspiradoras e música que fortalecem sua fé e te aproximam de Deus.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-radio-blue hover:bg-radio-dark-blue text-white font-medium"
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
          
          <div className="md:w-[45%] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <AudioPlayer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
