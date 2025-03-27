
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Link } from "react-router-dom";

// Mock data for schedule
const scheduleData = [
  {
    id: 1,
    day: "Monday",
    shows: [
      { id: 101, time: "06:00 - 09:00", title: "Morning Praise", host: "Pastor Samuel" },
      { id: 102, time: "09:00 - 12:00", title: "Bible Study Hour", host: "Dr. Rebecca Morris" },
      { id: 103, time: "12:00 - 15:00", title: "Lunchtime Worship", host: "David & The Team" },
      { id: 104, time: "15:00 - 18:00", title: "Youth Connect", host: "Michael Scott" },
      { id: 105, time: "18:00 - 21:00", title: "Evening Reflection", host: "Pastor James" },
    ]
  },
  {
    id: 2,
    day: "Tuesday",
    shows: [
      { id: 201, time: "06:00 - 09:00", title: "Rise & Shine", host: "Sister Rachel" },
      { id: 202, time: "09:00 - 12:00", title: "Scripture Time", host: "Pastor Matthew" },
      { id: 203, time: "12:00 - 15:00", title: "Gospel Hits", host: "DJ Faith" },
      { id: 204, time: "15:00 - 18:00", title: "Family Hour", host: "The Wilson Family" },
      { id: 205, time: "18:00 - 21:00", title: "Prayer Night", host: "Prayer Team" },
    ]
  },
  {
    id: 3,
    day: "Wednesday",
    shows: [
      { id: 301, time: "06:00 - 09:00", title: "Devotional Sunrise", host: "Pastor Mark" },
      { id: 302, time: "09:00 - 12:00", title: "Worship Workshop", host: "Worship Team" },
      { id: 303, time: "12:00 - 15:00", title: "Midweek Message", host: "Bishop Thomas" },
      { id: 304, time: "15:00 - 18:00", title: "Testimony Time", host: "Community Guests" },
      { id: 305, time: "18:00 - 21:00", title: "Evening Prayers", host: "Sister Grace" },
    ]
  },
  {
    id: 4,
    day: "Thursday",
    shows: [
      { id: 401, time: "06:00 - 09:00", title: "Morning Glory", host: "Pastor Samuel" },
      { id: 402, time: "09:00 - 12:00", title: "Classic Hymns", host: "Elder Johnson" },
      { id: 403, time: "12:00 - 15:00", title: "Theology Today", host: "Dr. William Brown" },
      { id: 404, time: "15:00 - 18:00", title: "Youth Matters", host: "Youth Ministry Team" },
      { id: 405, time: "18:00 - 21:00", title: "Evening Fellowship", host: "Pastor James" },
    ]
  },
  {
    id: 5,
    day: "Friday",
    shows: [
      { id: 501, time: "06:00 - 09:00", title: "Faithful Fridays", host: "Pastor David" },
      { id: 502, time: "09:00 - 12:00", title: "Gospel Countdown", host: "DJ Hope" },
      { id: 503, time: "12:00 - 15:00", title: "Lunch & Learn", host: "Bible Teachers Panel" },
      { id: 504, time: "15:00 - 18:00", title: "Community Hour", host: "Local Ministers" },
      { id: 505, time: "18:00 - 21:00", title: "Weekend Worship", host: "Praise Team" },
    ]
  },
  {
    id: 6,
    day: "Saturday",
    shows: [
      { id: 601, time: "06:00 - 09:00", title: "Weekend Blessing", host: "Pastor Rebecca" },
      { id: 602, time: "09:00 - 12:00", title: "Family Bible Quiz", host: "Quiz Master Jonathan" },
      { id: 603, time: "12:00 - 15:00", title: "Youth Spotlight", host: "Teen Ministry" },
      { id: 604, time: "15:00 - 18:00", title: "Music Marathon", host: "Various Artists" },
      { id: 605, time: "18:00 - 21:00", title: "Saturday Night Praise", host: "Worship Team" },
    ]
  },
  {
    id: 7,
    day: "Sunday",
    shows: [
      { id: 701, time: "06:00 - 09:00", title: "Sunday Sunrise", host: "Pastor James" },
      { id: 702, time: "09:00 - 12:00", title: "Live Church Service", host: "Main Sanctuary" },
      { id: 703, time: "12:00 - 15:00", title: "Sunday Reflection", host: "Elder Panel" },
      { id: 704, time: "15:00 - 18:00", title: "Children's Hour", host: "Children's Ministry" },
      { id: 705, time: "18:00 - 21:00", title: "Evening Inspiration", host: "Pastor Samuel" },
    ]
  }
];

// Component for schedule cards on homepage
const SchedulePreview = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];
  
  // Find today's schedule
  const todaySchedule = scheduleData.find(schedule => schedule.day === dayName) || scheduleData[0];
  
  // Current hour to highlight current show
  const currentHour = today.getHours();
  
  // Get current show
  const getCurrentShow = () => {
    return todaySchedule.shows.find(show => {
      const [startTime] = show.time.split(" - ");
      const [startHour] = startTime.split(":");
      const [endTime] = show.time.split(" - ")[1].split(" ");
      const [endHour] = endTime.split(":");
      
      return currentHour >= parseInt(startHour) && currentHour < parseInt(endHour);
    });
  };
  
  const currentShow = getCurrentShow();

  return (
    <section id="schedule" className="py-20 bg-radio-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h5 className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium bg-radio-blue/10 text-radio-blue rounded-full">
              <Calendar size={16} className="mr-2" />
              {format(today, "MMMM d, yyyy")}
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-radio-black mb-3">Today's Schedule</h2>
            <p className="text-radio-gray-700 max-w-2xl">
              Find out what's playing now and coming up next on our radio station.
            </p>
          </div>
          <Button 
            asChild
            variant="outline" 
            className="mt-4 md:mt-0 border-radio-blue text-radio-blue hover:bg-radio-blue/5"
          >
            <Link to="/schedule" className="inline-flex items-center">
              Full Schedule
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todaySchedule.shows.map((show, index) => (
            <div 
              key={show.id}
              className={cn(
                "bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md",
                currentShow && currentShow.id === show.id && "ring-2 ring-radio-blue",
                `animate-fade-in`
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {currentShow && currentShow.id === show.id && (
                <div className="flex items-center mb-3">
                  <div className="h-2 w-2 rounded-full bg-radio-blue animate-pulse mr-2" />
                  <span className="text-xs font-medium uppercase tracking-wider text-radio-blue">
                    Now Playing
                  </span>
                </div>
              )}
              
              <div className="text-sm font-medium text-radio-gray-700 mb-2">
                {show.time}
              </div>
              
              <h3 className="text-xl font-semibold text-radio-black mb-2">
                {show.title}
              </h3>
              
              <div className="text-radio-gray-700">
                with {show.host}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchedulePreview;
