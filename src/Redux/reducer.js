const initialState = {
  name: "suraj",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
      };
  }
  return state;
};

export default reducer;
