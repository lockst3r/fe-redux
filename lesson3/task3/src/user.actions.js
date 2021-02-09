export const SET_USER = 'USER/ADD';
export const REMOVE_USER = 'USER/REMOVE';

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
