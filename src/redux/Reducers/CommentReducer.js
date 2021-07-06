const initialState = {
  allComment: [],
};
export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMMENT": {
      return { ...state, allComment: action.allComment };
    }
    case "DELETE_COMMENT": {
      let newAllComment = [...state.allComment];
      let index = newAllComment.findIndex((cmt) => cmt.id === action.idComment);
      if (index !== -1) {
        newAllComment.splice(index, 1);
      }
      state.allComment = newAllComment;
      
      return { ...state };
    }

    default:
      return { ...state };
  }
};
