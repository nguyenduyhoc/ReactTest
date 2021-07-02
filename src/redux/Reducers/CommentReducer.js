const initialState = {
  allComment: [],
};
export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMMENT": {
      return { ...state, allComment: action.allComment };
    }

    default:
      return { ...state };
  }
};
