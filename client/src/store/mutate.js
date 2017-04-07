export default function mutate(state, action) {
  switch (action.type) {
    case 'SET_USER_PASSWORD':
      console.log('in mutate user/pw changed', action.payload, 'state in mutate:', state);
      state.username = action.payload.username;
      state.password = action.payload.password;
      console.log('after mutated user/pw state', state);
      return state;
    case 'SET_FEED_URLS':
      console.log('in mutate set feed urls', action.payload, 'state in mutate:', state);
      state.feedItems = action.payload;
      console.log('after mutated feed urls state', state);
      return state;
  }
}
