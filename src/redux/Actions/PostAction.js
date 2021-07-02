import axios from "axios"


export const getPostAction = () => {
    // get all post
    return async (dispatch) => {
      try {
        const result = await axios({
          url: `https://jsonplaceholder.typicode.com/posts`,
          method: "GET",
        });
        dispatch({
          type: "GET_POST",
          allPost: result.data,
        });
        // console.log(result.data)
      } catch (errors) {
        console.log("errors", errors.response?.data);
      }
    };
  };

  export const deletePost = (id) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: "DELETE_POST",
          idPost: id,
        });
      } catch (errors) {
        console.log("errors", errors.response?.data);
      }
    };
  };

 