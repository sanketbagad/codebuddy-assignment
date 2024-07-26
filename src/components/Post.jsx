import React from "react";

const Post = ({ post }) => {
  return (

   
        <div
          className="relative flex h-96 md:w-full items-end justify-start bg-cover bg-center text-left dark:bg-gray-500 w-70 bg-blur"
          style={{ backgroundImage: `url(${post.image})`, filter: "blur(0.5px)" }}
        >
          <div className="dark:via- absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b dark:from-gray-50 dark:to-gray-50"></div>
          <div className="absolute left-0 right-0 top-0 mx-5 mt-3 flex items-center justify-between">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold uppercase tracking-wider dark:bg-violet-600 dark:text-gray-800"
            >
             {post.firstName} {post.lastName}
            </a>
            <div className="flex flex-col justify-start text-center dark:text-gray-800">
              <span className="text-3xl font-semibold leading-none tracking-wide">26</span>
              <span className="uppercase leading-none">Jul</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-md font-medium hover:underline text-gray-100"
            >
              {" "}
              {post.writeup}
            </a>
          </h2>
        </div>
  );
};

export default Post;
