import React, { useState } from "react";
import "./auth.css";
import CreateBlog from "./CreateBlog";
import UpdateBlog from "./UpdateBlog";
import AllBlog from "./AllBlog";

function Auth() {
  const [activeTab, setActiveTab] = useState("allBlog");

  const createBlog = () => {
    setActiveTab("createBlog");
  };

  const updateBlog = () => {
    setActiveTab("updateBlog");
  };

  const showAllBlogs = () => {
    setActiveTab("allBlog");
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-heading">
          {/* <h2>Auth</h2> */}
          <a onClick={showAllBlogs}>All Blogs</a>
          <a onClick={createBlog}>Create Blog</a>
          <a onClick={updateBlog}>Update Blog</a>
        </div>
        <div className="main-container">
          {activeTab === "createBlog" && <CreateBlog />}
          {activeTab === "updateBlog" && <UpdateBlog />}
          {activeTab === "allBlog" && <AllBlog />}
        </div>
      </div>
    </section>
  );
}

export default Auth;
