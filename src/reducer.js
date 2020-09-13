export const initialState = {
  user: null,
  logged: false,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state, //keep the state
        user: action.user,
        logged: true,
      };
    default:
      return state;
  }
};

export default reducer;
