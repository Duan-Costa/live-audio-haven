
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MusicRequest = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    songTitle: "",
    artist: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setForm({
        name: "",
        email: "",
        songTitle: "",
        artist: "",
        message: "",
      });
      
      toast({
        title: "Music request submitted!",
        description: "We'll try to play your song as soon as possible.",
      });
    }, 1500);
  };

  return (
    <div className="rounded-xl bg-white shadow-sm p-8 transform transition-transform hover:shadow-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-radio-blue/10 rounded-full p-2">
          <Music size={24} className="text-radio-blue" />
        </div>
        <h3 className="font-bold text-xl text-radio-black">Request a Song</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="songTitle">Song Title</Label>
            <Input
              id="songTitle"
              name="songTitle"
              value={form.songTitle}
              onChange={handleChange}
              placeholder="Amazing Grace"
              required
              className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="artist">Artist</Label>
            <Input
              id="artist"
              name="artist"
              value={form.artist}
              onChange={handleChange}
              placeholder="Chris Tomlin"
              required
              className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Special dedication or message..."
            className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10 min-h-[100px]"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-radio-blue hover:bg-radio-dark-blue text-white"
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">Submitting</span>
              <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            </>
          ) : (
            "Submit Request"
          )}
        </Button>
      </form>
    </div>
  );
};

export default MusicRequest;
