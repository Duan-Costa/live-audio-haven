
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Mock data for schedule
const scheduleData = [
  {
    id: 1,
    day: "Monday",
    shows: [
      { id: 101, time: "06:00 - 09:00", title: "Morning Praise", host: "Pastor Samuel", description: "Start your day with uplifting worship music and devotional messages" },
      { id: 102, time: "09:00 - 12:00", title: "Bible Study Hour", host: "Dr. Rebecca Morris", description: "In-depth teaching from God's Word with practical application for daily living" },
      { id: 103, time: "12:00 - 15:00", title: "Lunchtime Worship", host: "David & The Team", description: "Contemporary worship music to lift your spirits during the workday" },
      { id: 104, time: "15:00 - 18:00", title: "Youth Connect", host: "Michael Scott", description: "Music and messages aimed at teens and young adults" },
      { id: 105, time: "18:00 - 21:00", title: "Evening Reflection", host: "Pastor James", description: "Quiet worship and reflection to end your day in God's presence" },
    ]
  },
  {
    id: 2,
    day: "Tuesday",
    shows: [
      { id: 201, time: "06:00 - 09:00", title: "Rise & Shine", host: "Sister Rachel", description: "Morning devotionals and upbeat Christian music to start your day right" },
      { id: 202, time: "09:00 - 12:00", title: "Scripture Time", host: "Pastor Matthew", description: "Reading through the Bible with commentary and discussion" },
      { id: 203, time: "12:00 - 15:00", title: "Gospel Hits", host: "DJ Faith", description: "The best in traditional and contemporary gospel music" },
      { id: 204, time: "15:00 - 18:00", title: "Family Hour", host: "The Wilson Family", description: "Programming for the whole family with special segments for children" },
      { id: 205, time: "18:00 - 21:00", title: "Prayer Night", host: "Prayer Team", description: "Live prayer requests and intercession for listeners' needs" },
    ]
  },
  {
    id: 3,
    day: "Wednesday",
    shows: [
      { id: 301, time: "06:00 - 09:00", title: "Devotional Sunrise", host: "Pastor Mark", description: "Morning devotions focusing on God's promises" },
      { id: 302, time: "09:00 - 12:00", title: "Worship Workshop", host: "Worship Team", description: "Behind the scenes with worship leaders and songwriters" },
      { id: 303, time: "12:00 - 15:00", title: "Midweek Message", host: "Bishop Thomas", description: "Powerful teaching to help you through the rest of your week" },
      { id: 304, time: "15:00 - 18:00", title: "Testimony Time", host: "Community Guests", description: "Real stories of faith from listeners and special guests" },
      { id: 305, time: "18:00 - 21:00", title: "Evening Prayers", host: "Sister Grace", description: "Guided prayer time focusing on different themes each week" },
    ]
  },
  {
    id: 4,
    day: "Thursday",
    shows: [
      { id: 401, time: "06:00 - 09:00", title: "Morning Glory", host: "Pastor Samuel", description: "Scripture reading, prayer, and worship to begin your day" },
      { id: 402, time: "09:00 - 12:00", title: "Classic Hymns", host: "Elder Johnson", description: "Traditional hymns and the stories behind these timeless songs" },
      { id: 403, time: "12:00 - 15:00", title: "Theology Today", host: "Dr. William Brown", description: "Exploring theological concepts in an accessible way" },
      { id: 404, time: "15:00 - 18:00", title: "Youth Matters", host: "Youth Ministry Team", description: "Addressing issues facing young Christians in today's world" },
      { id: 405, time: "18:00 - 21:00", title: "Evening Fellowship", host: "Pastor James", description: "Community discussions on faith and current events" },
    ]
  },
  {
    id: 5,
    day: "Friday",
    shows: [
      { id: 501, time: "06:00 - 09:00", title: "Faithful Fridays", host: "Pastor David", description: "End your week strong with encouragement from God's Word" },
      { id: 502, time: "09:00 - 12:00", title: "Gospel Countdown", host: "DJ Hope", description: "The top 20 Christian songs of the week" },
      { id: 503, time: "12:00 - 15:00", title: "Lunch & Learn", host: "Bible Teachers Panel", description: "Panel discussions on various biblical topics" },
      { id: 504, time: "15:00 - 18:00", title: "Community Hour", host: "Local Ministers", description: "Local church announcements and ministry spotlights" },
      { id: 505, time: "18:00 - 21:00", title: "Weekend Worship", host: "Praise Team", description: "Preparing your heart for weekend worship" },
    ]
  },
  {
    id: 6,
    day: "Saturday",
    shows: [
      { id: 601, time: "06:00 - 09:00", title: "Weekend Blessing", host: "Pastor Rebecca", description: "Devotional and prayer to start your weekend" },
      { id: 602, time: "09:00 - 12:00", title: "Family Bible Quiz", host: "Quiz Master Jonathan", description: "Interactive Bible quiz for the whole family" },
      { id: 603, time: "12:00 - 15:00", title: "Youth Spotlight", host: "Teen Ministry", description: "Music and messages selected by our youth team" },
      { id: 604, time: "15:00 - 18:00", title: "Music Marathon", host: "Various Artists", description: "Three hours of non-stop Christian music" },
      { id: 605, time: "18:00 - 21:00", title: "Saturday Night Praise", host: "Worship Team", description: "High-energy praise and worship music" },
    ]
  },
  {
    id: 7,
    day: "Sunday",
    shows: [
      { id: 701, time: "06:00 - 09:00", title: "Sunday Sunrise", host: "Pastor James", description: "Peaceful worship to prepare your heart for Sunday" },
      { id: 702, time: "09:00 - 12:00", title: "Live Church Service", host: "Main Sanctuary", description: "Live broadcast from our main church service" },
      { id: 703, time: "12:00 - 15:00", title: "Sunday Reflection", host: "Elder Panel", description: "Discussion of the morning's message and scripture" },
      { id: 704, time: "15:00 - 18:00", title: "Children's Hour", host: "Children's Ministry", description: "Bible stories, songs, and fun for kids" },
      { id: 705, time: "18:00 - 21:00", title: "Evening Inspiration", host: "Pastor Samuel", description: "Closing the weekend with encouragement for the week ahead" },
    ]
  }
];

const Schedule = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  
  // Default to today's day (0 = Sunday, 6 = Saturday)
  const [activeDay, setActiveDay] = useState(dayOfWeek === 0 ? 7 : dayOfWeek);
  
  // Current hour to highlight current show
  const currentHour = today.getHours();
  
  const days = [
    { id: 1, name: "Mon" },
    { id: 2, name: "Tue" },
    { id: 3, name: "Wed" },
    { id: 4, name: "Thu" },
    { id: 5, name: "Fri" },
    { id: 6, name: "Sat" },
    { id: 7, name: "Sun" },
  ];
  
  // Find active schedule
  const activeSchedule = scheduleData.find(schedule => schedule.id === activeDay) || scheduleData[0];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="bg-radio-gray-100 py-16">
          <div className="container px-4 mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-radio-blue/10 text-radio-blue rounded-full">
              <Calendar size={16} className="mr-2" />
              Program Schedule
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-radio-black mb-6">
              Our Radio Schedule
            </h1>
            <p className="text-radio-gray-700 max-w-2xl mx-auto">
              Check out our program schedule to never miss your favorite shows.
              We broadcast 24/7 with a variety of programs for all ages and interests.
            </p>
          </div>
        </section>
        
        {/* Day selector */}
        <section className="py-8 border-b border-radio-gray-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {days.map((day) => (
                <Button
                  key={day.id}
                  variant="ghost"
                  className={cn(
                    "rounded-full min-w-[70px]",
                    activeDay === day.id 
                      ? "bg-radio-blue text-white hover:bg-radio-dark-blue"
                      : "text-radio-gray-700 hover:text-radio-blue hover:bg-radio-blue/5"
                  )}
                  onClick={() => setActiveDay(day.id)}
                >
                  {day.name}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Schedule timeline */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-radio-black mb-8 text-center">
                {activeSchedule.day}'s Programs
              </h2>
              
              <div className="space-y-6">
                {activeSchedule.shows.map((show, index) => {
                  // Check if this is the current show
                  const isCurrentShow = activeDay === (dayOfWeek === 0 ? 7 : dayOfWeek) && (() => {
                    const [startTime] = show.time.split(" - ");
                    const [startHour] = startTime.split(":");
                    const [endTime] = show.time.split(" - ")[1].split(" ");
                    const [endHour] = endTime.split(":");
                    
                    return currentHour >= parseInt(startHour) && currentHour < parseInt(endHour);
                  })();
                  
                  return (
                    <div 
                      key={show.id}
                      className={cn(
                        "relative flex flex-col md:flex-row md:items-start rounded-xl overflow-hidden shadow-sm bg-white p-6 transition-all duration-300",
                        isCurrentShow ? "ring-2 ring-radio-blue" : "hover:shadow-md",
                        "animate-fade-in"
                      )}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {isCurrentShow && (
                        <div className="absolute top-4 right-4 flex items-center">
                          <div className="h-2 w-2 rounded-full bg-radio-blue animate-pulse mr-2" />
                          <span className="text-xs font-medium uppercase tracking-wider text-radio-blue">
                            On Air
                          </span>
                        </div>
                      )}
                      
                      <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                        <div className="flex items-center mb-2">
                          <Clock size={16} className="text-radio-blue mr-2" />
                          <span className="text-sm font-medium text-radio-gray-700">
                            {show.time}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-radio-black">
                          {show.title}
                        </h3>
                        <div className="flex items-center mt-2">
                          <User size={16} className="text-radio-blue mr-2" />
                          <span className="text-sm text-radio-gray-700">
                            {show.host}
                          </span>
                        </div>
                      </div>
                      
                      <div className="md:w-3/4">
                        <p className="text-radio-gray-700">
                          {show.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
