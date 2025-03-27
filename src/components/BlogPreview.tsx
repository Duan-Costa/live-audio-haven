
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Finding Peace in God's Promises",
    excerpt: "Discover how God's promises can bring peace to your life during challenging times.",
    image: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "June 12, 2023",
    author: "Pastor Samuel",
    category: "Devotional",
  },
  {
    id: 2,
    title: "The Power of Gospel Music in Worship",
    excerpt: "How gospel music has transformed worship practices and brought communities together.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "May 28, 2023",
    author: "Music Director Sarah",
    category: "Music",
  },
  {
    id: 3,
    title: "Youth Ministry: Connecting the Next Generation",
    excerpt: "Learn about our youth programs and how we're helping young people grow in faith.",
    image: "https://images.unsplash.com/photo-1609234657807-3f419f1d7ce6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "May 15, 2023",
    author: "Youth Pastor Michael",
    category: "Youth",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h5 className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium bg-radio-blue/10 text-radio-blue rounded-full">
              <Newspaper size={16} className="mr-2" />
              Blog & News
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-radio-black mb-3">Latest Articles</h2>
            <p className="text-radio-gray-700 max-w-2xl">
              Stay updated with our latest content, devotionals, and radio updates.
            </p>
          </div>
          <Button 
            asChild
            variant="outline" 
            className="mt-4 md:mt-0 border-radio-blue text-radio-blue hover:bg-radio-blue/5"
          >
            <Link to="/blog" className="inline-flex items-center">
              View All Posts
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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
                <div className="flex items-center text-sm text-radio-gray-700 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-radio-black mb-3 line-clamp-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-radio-blue transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-radio-gray-700 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  asChild
                  variant="ghost" 
                  className="p-0 h-auto text-radio-blue hover:text-radio-dark-blue hover:bg-transparent"
                >
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center">
                    Read More
                    <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
