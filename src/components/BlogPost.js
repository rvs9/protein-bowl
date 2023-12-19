// src/components/BlogPost.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const BlogPost = ({ id, title, image, content, date, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <Link to={`/blog/${id}`}>
        {/* Link to the individual blog post page */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover mb-4"
        />
      </Link>
      <div className="p-6">
        <Link to={`/blog/${id}`}>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
        </Link>
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="flex justify-between text-sm text-gray-700">
          <p>{date}</p>
          <p>By {author}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
