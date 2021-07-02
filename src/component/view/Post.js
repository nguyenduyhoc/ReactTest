import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostAction } from "../../redux/Actions/PostAction";
import Comment from "./Comment";

export default function Post() {
  // Get all post
  const { allPost } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction());
  }, []);
  //   console.log(allPost);

  const renderPost = () => {
    return allPost.map((post) => {
      return (
        <div className="card mt-5" key={post.id}>
          <h3>Id: {post.userId} </h3>
          <div className="card-body">
            <h4 className="card-title">Title: {post.title}</h4>
            <p className="card-text">Body: {post.body}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete Post
            </button>
            
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      {renderPost()}
      <Comment allPost={allPost} />

    </div>
  );
}
