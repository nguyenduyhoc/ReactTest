import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentAction } from "../../redux/Actions/CommentAction";

export default function Comment(props) {
  console.log(props);
  // get comment
  const { allComment } = useSelector((state) => state.CommentReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentAction());
  }, [dispatch]);
  console.log(allComment);

  const renderComment = () => {
    return allComment.map((comment) => {
      return (
        <div className="form">
          <div className="form-group">
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Content:{comment.body}</p>
          </div>
        </div>
      );
    });
  };
  return <div>{renderComment()}</div>;
}
