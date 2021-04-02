export const setToken = (state, token) => {
  state.token = token;
};
export const destroyToken = state => {
  state.token = null;
};
export const setUser = (state, user) => {
  state.user = user;
};
