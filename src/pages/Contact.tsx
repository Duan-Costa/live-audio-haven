
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Radio } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MusicRequest from "@/components/MusicRequest";
import PrayerRequest from "@/components/PrayerRequest";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
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
        subject: "",
        message: ""
      });
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      title: "Address",
      content: "123 Worship Street, Faith City, FC 12345",
    },
    {
      title: "Phone",
      content: "(123) 456-7890",
      link: "tel:+11234567890"
    },
    {
      title: "Email",
      content: "info@radiolive.com",
      link: "mailto:info@radiolive.com"
    },
    {
      title: "Studio Line",
      content: "(123) 555-7890",
      link: "tel:+11235557890"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="bg-radio-gray-100 py-16">
          <div className="container px-4 mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-radio-blue/10 text-radio-blue rounded-full">
              <Radio size={16} className="mr-2" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-radio-black mb-6">
              Contact Us
            </h1>
            <p className="text-radio-gray-700 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
              we're here to help.
            </p>
          </div>
        </section>
        
        {/* Contact form and info */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact information */}
              <div className="lg:col-span-1 animate-fade-in">
                <div className="bg-white rounded-xl shadow-sm p-8 h-full">
                  <h2 className="text-2xl font-bold text-radio-black mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div 
                        key={index}
                        className="transition-all duration-300 hover:translate-x-1"
                      >
                        <h3 className="text-lg font-medium text-radio-black mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-radio-gray-700 hover:text-radio-blue transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-radio-gray-700">{item.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="text-lg font-medium text-radio-black mb-4">
                      Our Hours
                    </h3>
                    <div className="space-y-2">
                      <p className="text-radio-gray-700">
                        <span className="font-medium">Office:</span> Monday - Friday, 9am - 5pm
                      </p>
                      <p className="text-radio-gray-700">
                        <span className="font-medium">Studio:</span> 24/7 Broadcasting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact form */}
              <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-radio-black mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        required
                        className="border-radio-gray-200 focus:border-radio-blue focus:ring-radio-blue/10 min-h-[150px]"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-radio-blue hover:bg-radio-dark-blue text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Sending</span>
                          <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Special requests section */}
        <section className="py-16 bg-radio-gray-100">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-radio-black mb-4">
                Special Requests
              </h2>
              <p className="text-radio-gray-700">
                Want to request a song or share a prayer need? Use our dedicated forms below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <MusicRequest />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <PrayerRequest />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
