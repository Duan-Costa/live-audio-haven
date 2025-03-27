
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PrayerRequest = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    prayerRequest: "",
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
        prayerRequest: "",
      });
      setIsAnonymous(false);
      
      toast({
        title: "Prayer request submitted!",
        description: "Our prayer team will be praying for your request.",
      });
    }, 1500);
  };

  return (
    <div className="rounded-xl bg-white shadow-sm p-8 transform transition-transform hover:shadow-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-radio-blue/10 rounded-full p-2">
          <MessageSquare size={24} className="text-radio-blue" />
        </div>
        <h3 className="font-bold text-xl text-radio-black">Prayer Request</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isAnonymous && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prayer-name">Your Name</Label>
              <Input
                id="prayer-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required={!isAnonymous}
                disabled={isAnonymous}
                className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="prayer-email">Email Address</Label>
              <Input
                id="prayer-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required={!isAnonymous}
                disabled={isAnonymous}
                className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10"
              />
            </div>
          </div>
        )}
        
        <div className="flex items-center space-x-2 mb-2">
          <Switch
            id="anonymous"
            checked={isAnonymous}
            onCheckedChange={setIsAnonymous}
          />
          <Label htmlFor="anonymous" className="cursor-pointer">Submit anonymously</Label>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="prayerRequest">Your Prayer Request</Label>
          <Textarea
            id="prayerRequest"
            name="prayerRequest"
            value={form.prayerRequest}
            onChange={handleChange}
            placeholder="Share your prayer request with us..."
            className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10 min-h-[150px]"
            required
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
            "Submit Prayer Request"
          )}
        </Button>
      </form>
    </div>
  );
};

export default PrayerRequest;
