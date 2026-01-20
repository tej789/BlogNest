import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleBlog = () => {
  const { mode, user, isAuthenticated } = useContext(Context);
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/blog/singleblog/${id}`,
          { withCredentials: true }
        );
        console.log("Blog fetched:", data); 
        setBlog(data.blog);
        setLoading(false); 
      } catch (error) {
        console.log("Error fetching blog:", error);
        setError("Failed to fetch the blog"); 
        setLoading(false); 
      }
    };
    getSingleBlog();
  }, [id]);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <article
      className={mode === "dark" ? "dark-bg singleBlog" : "light-bg singleBlog"}
    >
      {blog && (
        <section className="container">
          <div className="category">{blog?.category}</div>
          <h1>{blog?.title}</h1>
          <div className="writer_section">
            <div className="author">
              <img src={blog?.authorAvatar} alt="author_avatar" />
              <p>{blog?.authorName}</p>
            </div>
          </div>
          {blog?.mainImage?.url && (
            <img
              src={blog.mainImage.url}
              alt="mainBlogImg"
              className="mainImg"
            />
          )}
          <p className="intro-text">{blog?.intro}</p>

          <div className="sub-para">
            <h3>{blog?.paraOneTitle}</h3>
            {blog?.paraOneImage?.url && (
              <img src={blog.paraOneImage.url} alt="paraOneImg" />
            )}
            <p>{blog?.paraOneDescription}</p>
          </div>

          <div className="sub-para">
            <h3>{blog?.paraTwoTitle}</h3>
            {blog?.paraTwoImage?.url && (
              <img src={blog.paraTwoImage.url} alt="paraTwoImg" />
            )}
            <p>{blog?.paraTwoDescription}</p>
          </div>

          <div className="sub-para">
            <h3>{blog?.paraThreeTitle}</h3>
            <p>{blog?.paraThreeDescription}</p>
            {blog?.paraThreeImage?.url && (
              <img src={blog.paraThreeImage.url} alt="paraThreeImg" />
            )}
          </div>
        </section>
      )}
    </article>
  );
};

export default SingleBlog;
