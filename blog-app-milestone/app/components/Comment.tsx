"use client";

import { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleAddComment = () => {
    if (!newComment.trim() || !username.trim()) return;
    setComments((prevComments) => [
      { name: username, text: newComment },
      ...prevComments,
    ]);
    setNewComment("");
    setUsername("");
  };

  return (
    <div className="my-14 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add a Comment</h2>
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name"
          className="w-full border rounded-md p-2 py-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary mb-4"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write something here..."
          className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          Post
        </button>
      </div>
      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="mb-4 p-4 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
            >
              <p className="font-bold mb-[2px]">{comment.name}</p>
              <p>{comment.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default Comment;
