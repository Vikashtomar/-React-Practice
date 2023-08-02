
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Blog() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setPost(res.data);
    });
  }, []);
  // console.log(post)
  return (
    <>
      <div className="blog">
        {post.map((val) => {
          const { body, title, id } = val;
          const blogId = "/blog/" + id;

          return (
            <>
              <h1>
                {" "}
                <Link to={blogId}> {title} </Link>{" "}
              </h1>
              <p>{body}</p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
