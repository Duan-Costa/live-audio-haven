
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Headphones
} from "lucide-react";
import { cn } from "@/lib/utils";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [prevVolume, setPrevVolume] = useState(0.7);
  const [isLoading, setIsLoading] = useState(false);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const [nowPlaying, setNowPlaying] = useState({
    title: "Morning Praise",
    host: "Pastor Samuel",
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Set up audio element
  useEffect(() => {
    audioRef.current = new Audio("https://stream-59.zeno.fm/epn8q84vetzuv");
    audioRef.current.volume = volume;
    
    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    setIsLoading(true);
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsLoading(false);
    } else {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(error => {
            console.error("Error playing audio:", error);
            setIsLoading(false);
          });
      }
    }
  };
  
  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
      audioRef.current.volume = 0;
    } else {
      setVolume(prevVolume);
      audioRef.current.volume = prevVolume;
    }
  };
  
  const handleVolumeChange = (newVolume: number[]) => {
    if (!audioRef.current) return;
    
    const vol = newVolume[0];
    setVolume(vol);
    audioRef.current.volume = vol;
  };

  return (
    <div 
      id="listen" 
      className="glass rounded-xl py-6 px-8 w-full max-w-md shadow-lg transform transition-transform hover:scale-[1.02]"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-radio-blue/10 rounded-full p-2">
            <Headphones size={24} className="text-radio-blue" />
          </div>
          <h3 className="font-medium text-lg">Live Stream</h3>
        </div>
        
        {/* Audio visualization animation */}
        <div className={cn("h-7 flex items-end space-x-0.5", !isPlaying && "opacity-0")}>
          <span className="audio-wave animate-wave-1" />
          <span className="audio-wave animate-wave-2" />
          <span className="audio-wave animate-wave-3" />
          <span className="audio-wave animate-wave-4" />
          <span className="audio-wave animate-wave-5" />
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-radio-black">
          {nowPlaying.title}
        </h4>
        <p className="text-radio-gray-700">
          with {nowPlaying.host}
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <Button
          onClick={togglePlay}
          disabled={isLoading}
          aria-label={isPlaying ? "Pause" : "Play"}
          size="icon"
          variant="secondary"
          className={cn(
            "h-12 w-12 rounded-full shadow-sm transition-all relative",
            isLoading && "animate-pulse"
          )}
        >
          {isLoading ? (
            <div className="h-4 w-4 rounded-full border-2 border-radio-blue border-t-transparent animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </Button>
        
        <div className="relative">
          <Button
            onClick={toggleMute}
            aria-label={volume === 0 ? "Unmute" : "Mute"}
            variant="ghost"
            className="h-10 w-10 rounded-full"
            onMouseEnter={() => setIsVolumeOpen(true)}
          >
            {volume === 0 ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
          
          <div
            className={cn(
              "absolute -left-20 bottom-full mb-2 bg-white rounded-lg p-4 shadow-md transition-all w-48",
              isVolumeOpen 
                ? "opacity-100 translate-y-0 visible" 
                : "opacity-0 translate-y-2 invisible"
            )}
            onMouseEnter={() => setIsVolumeOpen(true)}
            onMouseLeave={() => setIsVolumeOpen(false)}
          >
            <Slider
              value={[volume]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
