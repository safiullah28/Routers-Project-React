import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const [Posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetchPosts();
  }, []);
  // async function fetchPosts(){
  // fetch(`https://jsonplaceholder.typicode.com/posts`)
  // .then((response)=>{
  //   response.json();
  // })
  // .then((response)=>{
  //   setPosts(response);
  // })
  // .then(setLoader(false));
  // }

  let fetchPosts = async () => {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );

      console.log(response.data);
      setLoader(true);
    } catch (error) {
      console.log("Error in API Fetching : ", error);
    }
  };
  return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Products</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ol className="breadcrumb.justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Posts</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
      {
        loader ? <div className="text-center">Loading...</div>:(
          <div className="row">{
            Posts.map((post)=>{
              return(
                <div className="col-sm-6" key={post.id}>
                <div className="card">
                <div className="card-body">
                <h5 className="card-title">
                {post.title}
                <p className="card-text">
                {post.body}

                </p>
                </h5>
                </div>
                </div>
                </div>
              )
            })
          }</div>
        )
      }
      </div>
    </main>
  );
};

export default Posts;
