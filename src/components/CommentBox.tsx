
"use client";

import React, { useState } from "react";

const CommentBox = () => {

    type Comment = {
        id: number;
        userName: string;
        text: string;
      };
      
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  // Function to handle adding a comment
  const addComment = () => {
    if (userName.trim() && comment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), userName: userName, text: comment },
      ]);
      setComment(""); // Clear the comment input
      setUserName(""); // Clear the username input
    } else {
      alert("Please fill out both the username and comment fields!");
    }
  };

  // Function to delete a comment
  const deleteComment = (id:number) => {
    
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="max-w-4xl p-5">
      <h3 className="text-start text-[40px]">Comments</h3>

      {/* Input Section */}
      <div className="flex flex-col justify-start gap-y-4">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="UserName"
          className="w-[50%] ml-3 mt-7 p-2 border-2"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="2"
          name="comment"
          placeholder="Write comment here"
          className="w-[50%] ml-3 mt-2 p-2 h-36 border-2"
        ></textarea>
        <button
          onClick={addComment}
          className="bg-blue-400 w-[20%] rounded p-2 ml-[146px]"
        >
          Add Comment
        </button>
      </div>

      {/* Comments Section */}
      <div className="grid grid-cols-1">
        {comments.map((item) => (
          <div key={item.id} className="border shadow p-5 m-4 w-[50%]">
            <div className="flex justify-between items-center">
              <div>
                <strong>{item.userName}</strong>
                <p>{item.text}</p>
              </div>
              <span
                onClick={() => deleteComment(item.id)}
                className="cursor-pointer shadow rounded-full h-8 text-center w-8 py-1 bg-red-400 text-white"
              >
                X
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
