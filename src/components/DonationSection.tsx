
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const donationOptions = [
  { amount: 10, label: "$10", description: "One-time support" },
  { amount: 25, label: "$25", description: "Supporter level", popular: true },
  { amount: 50, label: "$50", description: "Friend level" },
  { amount: 100, label: "$100", description: "Partner level" },
];

const DonationSection = () => {
  return (
    <section className="py-20 bg-radio-gray-100">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h5 className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium bg-radio-blue/10 text-radio-blue rounded-full mx-auto">
            <Heart size={16} className="mr-2" />
            Support Our Ministry
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-radio-black mb-5">
            Help Us Share God's Word Through Radio
          </h2>
          <p className="text-radio-gray-700 max-w-2xl mx-auto">
            Your donations make it possible for us to continue broadcasting hope, inspiration, and
            the Good News to our community and beyond. Every contribution makes a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {donationOptions.map((option, index) => (
            <div 
              key={option.amount}
              className={cn(
                "p-6 rounded-xl bg-white transition-all duration-300 relative group",
                option.popular 
                  ? "ring-2 ring-radio-blue shadow-md" 
                  : "shadow-sm hover:shadow-md",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-radio-blue text-white text-xs font-medium py-1 px-3 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="text-center">
                <div className="text-2xl font-bold text-radio-black mb-1">{option.label}</div>
                <div className="text-sm text-radio-gray-700 mb-4">{option.description}</div>
                <Button 
                  className={cn(
                    "w-full transition-colors",
                    option.popular
                      ? "bg-radio-blue hover:bg-radio-dark-blue text-white"
                      : "bg-white text-radio-blue border border-radio-blue hover:bg-radio-blue/5"
                  )}
                >
                  Donate
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-sm p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold text-radio-black mb-4">
              Custom Donation Amount
            </h3>
            <p className="text-radio-gray-700 mb-6">
              Want to donate a different amount? Enter your custom donation below.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-full max-w-xs">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-radio-gray-700">
                  $
                </div>
                <input 
                  type="number" 
                  placeholder="Enter amount" 
                  className="w-full pl-8 pr-4 py-2 border border-radio-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-radio-blue/10 focus:border-radio-blue"
                />
              </div>
              <Button 
                className="bg-radio-blue hover:bg-radio-dark-blue text-white w-full sm:w-auto"
              >
                Donate Now
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-radio-gray-700">
              All donations are tax-deductible. Tax receipts will be provided.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
