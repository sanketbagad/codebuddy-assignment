import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://codebuddy.review/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="rounded-lg  p-7 text-gray-100 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>
      <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-2 lg:grid-cols-3">
      {posts?.data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      </div>
    </div>
  );
};

export default Posts;
