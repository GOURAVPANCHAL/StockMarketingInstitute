import React from "react";
import image from "../../images/img_1.png";
import '../Auth/auth.css'
import { Link } from "react-router-dom";
function AllBlog() {
  const blogData = [
    {
      image: image,
      title: "hello Blogers",
    },
    {
      image: image,
      title: "hello Blogers",
    },
    {
      image: image,
      title: "hello Blogers",
    },
    {
      image: image,
      title: "hello Blogers",
    },
  ];
  return (
    <>
      <div className="container">
        <table class="table table-striped table-bordered">
          <tr>
            <th>S No.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>
              <img className="allblogimage" src={image} alt="" />
            </td>
            <td>Hello Blogers</td>
            <td>stock marketing website and give courses</td>
            <td><button className="update"><Link to={'/admin/auth/update-blog'}>Update</Link></button></td>
            <td>
                
                <button className="delete">Delete</button>
                
                </td>
          </tr>
        </table>
      </div>

      {/* <div className='allblog'>
        {blogData.map((item)=>
        <div className="form">
            <img src={item.image} width={'100%'} alt="" />
            <div className="title">
                {item.title}
            </div>
            <div className='buttons'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
            </div>
            
        </div>
        )}
    </div> */}
    </>
  );
}

export default AllBlog;
