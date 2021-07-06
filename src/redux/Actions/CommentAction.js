import axios from "axios";

export const getCommentAction = (id) => {
  // get all post
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        method: "GET",
      });
      dispatch({
        type: "GET_COMMENT",
        allComment: result.data,
      });
      // console.log(result.data)
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
export const deleteComment = (idComment) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "DELETE_COMMENT",
        idComment,
      });
      console.log(idComment)
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
