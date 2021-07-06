const initialState = {
  allPost: [],
};
export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST": {
      return { ...state, allPost: action.allPost };
    }
    case "DELETE_POST": {
      let newAllPost = [...state.allPost];
      let index = newAllPost.findIndex((post) => post.id === action.idPost);
      if (index !== -1) {
        newAllPost.splice(index, 1);
      }
      // console.log(newAllPost)
      state.allPost = newAllPost;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
