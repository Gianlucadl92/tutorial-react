import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    (() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((json) => setComments(json));
    })();
  }, []);

  return (
    <div>
      <ul className="lista">
        {comments &&
          comments.slice(0, 5).map((comment) => {
            return <li key={comment.id}>{comment.email}</li>;
          })}
      </ul>
    </div>
  );
};

export default Comments;
