/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Singleblog() {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log(response.data);
        setSingleBlog(response.data);
      });
  }, []);

  return (
    <div className="singleBlog">
      <h2>{singleBlog.title}</h2>
      <p>{singleBlog.body}</p>
    </div>
  );
}

export default Singleblog;
