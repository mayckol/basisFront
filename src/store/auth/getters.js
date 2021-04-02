export const loggedIn = state => {
  return state.token !== null;
};

export const user = state => {
  return state.user;
};

export const userId = state => {
  return state.userId;
};

export const userName = state => {
  return state.userName;
};
