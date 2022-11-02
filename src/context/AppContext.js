import {SIGN_IN, SIGN_OUT} from './ActionTypes';
import CreateContext from './CreateContext';

const initialState = {
  displayName: '',
  userName: '',
  authenticated: false,
  documents: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case SIGN_OUT:
      return {
        displayName: '',
        userName: '',
        authenticated: false,
      };
    case SIGN_IN:
      return {
        displayName: action.payload.displayName,
        userName: action.payload.userName,
        authenticated: true,
      };
    default:
      return state;
  }
};

const signIn = dispatch => {
  return (response, userName) => {
    dispatch({
      type: SIGN_IN,
      payload: {
        displayName: response.data.displayName,
        userName: userName,
      },
    });
  };
};

const signOut = dispatch => {
  return () => {
    dispatch({
      type: SIGN_OUT,
      payload: {
        displayName: '',
        userName: '',
      },
    });
  };
};

export const {Provider, Context} = CreateContext(
  appReducer,
  {signIn, signOut},
  initialState,
);
