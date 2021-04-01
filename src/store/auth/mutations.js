export const retrieveToken = (state, token) => {
  state.token = token
};
export const destroyToken = (state) => {
  console.log('mutation')
  state.token = null
  console.log(state.token)
};
