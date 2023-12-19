// src/components/BlogSection.js
import React from "react";
import { Link } from "react-router-dom";
import BlogPost from "./BlogPost";
import image from "../images/Shroomami.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Healthy Salad Recipe",
      image: image,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "January 15, 2023",
      author: "John Doe",
    },
    {
      id: 1,
      title: "Healthy Salad Recipe",
      image: image,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "January 15, 2023",
      author: "John Doe",
    },
    {
      id: 1,
      title: "Healthy Salad Recipe",
      image: image,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "January 15, 2023",
      author: "John Doe",
    },
    // Add more blog posts as needed
  ];

  return (
    <section className="bg-gray-100 py-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            {/* Link to the individual blog post page */}
            <BlogPost {...post} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
