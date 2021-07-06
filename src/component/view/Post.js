import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostAction } from "../../redux/Actions/PostAction";
import Pagination from "react-js-pagination";
import PostList from "./PostList";

export default function Post() {
  const dispatch = useDispatch();

  // Get all post
  const { allPost } = useSelector((state) => state.PostReducer);
  //Paginatiopn
  // const [state, setState] = useState({
  //   activePage: 1,
  // });

  // const handlePageChange = (pageNumber) => {
  //   const newState = { activePage: pageNumber };
  //   setState(newState);
  // };
  useEffect(() => {
    dispatch(getPostAction());
  }, [dispatch]);
  //   console.log(allPost);

  return (
    <div className="container">
      {/* <Pagination
        activePage={state.activePage}
        itemsCountPerPage={1}
        totalItemsCount={10}
        pageRangeDisplayed={5}
        onChange={handlePageChange.bind()}
        itemClass="page-item"
        linkClass="page-link"
      /> */}
      {allPost.map((post) => (
        <PostList
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
