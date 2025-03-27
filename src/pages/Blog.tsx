
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Newspaper, Calendar, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Mock data for blog posts
const allBlogPosts = [
  {
    id: 1,
    title: "Finding Peace in God's Promises",
    excerpt: "Discover how God's promises can bring peace to your life during challenging times. In this article, we explore key scriptures that offer comfort and hope.",
    image: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "June 12, 2023",
    readingTime: "5 min read",
    author: "Pastor Samuel",
    category: "Devotional",
  },
  {
    id: 2,
    title: "The Power of Gospel Music in Worship",
    excerpt: "How gospel music has transformed worship practices and brought communities together. We look at the history and impact of gospel music in the church.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "May 28, 2023",
    readingTime: "7 min read",
    author: "Music Director Sarah",
    category: "Music",
  },
  {
    id: 3,
    title: "Youth Ministry: Connecting the Next Generation",
    excerpt: "Learn about our youth programs and how we're helping young people grow in faith. This article shares success stories and strategies for youth engagement.",
    image: "https://images.unsplash.com/photo-1609234657807-3f419f1d7ce6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "May 15, 2023",
    readingTime: "6 min read",
    author: "Youth Pastor Michael",
    category: "Youth",
  },
  {
    id: 4,
    title: "Prayer Habits for Spiritual Growth",
    excerpt: "Develop a stronger prayer life with these practical habits that foster spiritual growth and a deeper connection with God.",
    image: "https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "May 3, 2023",
    readingTime: "8 min read",
    author: "Pastor Rebecca",
    category: "Spiritual Growth",
  },
  {
    id: 5,
    title: "Community Outreach: Serving Our Neighbors",
    excerpt: "See how our radio ministry is reaching beyond the airwaves to serve those in need in our local community through various outreach programs.",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "April 22, 2023",
    readingTime: "5 min read",
    author: "Outreach Coordinator David",
    category: "Community",
  },
  {
    id: 6,
    title: "Understanding the Psalms: A Guide for Modern Life",
    excerpt: "How the ancient wisdom of the Psalms can provide guidance, comfort, and inspiration for navigating today's complex world.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "April 10, 2023",
    readingTime: "9 min read",
    author: "Bible Scholar Dr. Thomas",
    category: "Bible Study",
  },
];

// Categories for filter
const categories = [
  "All",
  "Devotional",
  "Music",
  "Youth",
  "Spiritual Growth",
  "Community",
  "Bible Study",
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter posts based on search term and category
  const filteredPosts = allBlogPosts.filter(post => {
    // Filter by search term
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the filter function above
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="bg-radio-gray-100 py-16">
          <div className="container px-4 mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-radio-blue/10 text-radio-blue rounded-full">
              <Newspaper size={16} className="mr-2" />
              Our Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-radio-black mb-6">
              News & Inspiration
            </h1>
            <p className="text-radio-gray-700 max-w-2xl mx-auto mb-8">
              Stay updated with our latest articles, devotionals, and radio updates. Find inspiration for your faith journey.
            </p>
            
            {/* Search form */}
            <form 
              onSubmit={handleSearch}
              className="max-w-md mx-auto relative"
            >
              <Input
                type="search"
                placeholder="Search articles..."
                className="pr-10 border-radio-gray-200 focus:border-radio-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Search size={18} className="text-radio-gray-700" />
              </Button>
            </form>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-8 border-b border-radio-gray-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "rounded-full px-4",
                    selectedCategory === category 
                      ? "bg-radio-blue text-white hover:bg-radio-dark-blue"
                      : "text-radio-gray-700 hover:text-radio-blue hover:bg-radio-blue/5"
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog posts */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-radio-black mb-2">No articles found</h3>
                <p className="text-radio-gray-700">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <article 
                    key={post.id}
                    className={cn(
                      "rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md bg-white",
                      "animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 image-loading bg-radio-gray-200" />
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-white rounded-full text-radio-blue shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-radio-gray-700 mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-radio-black mb-3 line-clamp-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-radio-blue transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-radio-gray-700 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-radio-gray-700">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                        
                        <Button 
                          asChild
                          variant="ghost" 
                          className="p-0 h-auto text-radio-blue hover:text-radio-dark-blue hover:bg-transparent"
                        >
                          <Link to={`/blog/${post.id}`} className="inline-flex items-center">
                            Read More
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="ml-1 transition-transform group-hover:translate-x-0.5"
                            >
                              <path d="m9 18 6-6-6-6"/>
                            </svg>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
