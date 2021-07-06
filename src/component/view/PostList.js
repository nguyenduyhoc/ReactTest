import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  getCommentAction,
} from "../../redux/Actions/CommentAction";
import { deletePost } from "../../redux/Actions/PostAction";

import axios from "axios";

export default function PostList({ id, userId, title, body }) {
  const dispatch = useDispatch();
  const [allComment, setComment] = useState([]);

  const showComment = async () => {
    let result = await axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      method: "GET",
    });
    setComment(result.data);
  };
  // console.log(allComment)
  // const deleteCmt = (id) => {
  //   // dispatch({
  //   //   type: "DELETE_COMMENT",
  //   //   idComment: id,
  //   // });
  //   console.log(id)
  // };

  const renderComment = () => {
    return allComment?.map((comment) => (
      <div key={comment.id}>
        <h3>Comment: </h3>
        <p>{comment.id}</p>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={() => dispatch(deleteComment(comment.id))}>Delete Comment</button>
      </div>
    ));
  };

  return (
    <div>
      <div className="card text-left">
        <h3>{userId}</h3>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{body}</p>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deletePost(id))}
        >
          Delete
        </button>

        <button className="btn btn-success" onClick={showComment}>
          Show comment
        </button>
        {renderComment()}
      </div>
    </div>
  );
}
