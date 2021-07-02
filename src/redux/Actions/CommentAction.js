import axios from "axios"

export const getCommentAction = () => {
    // get all post
    return async (dispatch) => {
      try {
        const result = await axios({
          url: `https://jsonplaceholder.typicode.com/comments`,
          method: "GET",
        });
        dispatch({
          type: "GET_COMMENT",
          allComment: result.data,
        });
        console.log(result.data)
      } catch (errors) {
        console.log("errors", errors.response?.data);
      }
    };
  };