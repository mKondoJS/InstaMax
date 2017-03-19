export default function mutate(state, action) {
  switch (action.type) {
    // case 'GITHUB_FOLLOWERS_LOADING':
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case 'GITHUB_FOLLOWERS_LOADED':
    //   return {
    //     ...state,
    //     isLoading: false,
    //     users: action.payload,
    //   };
    /*case 'NAME_CHANGED':
      console.log('in mutate name changed', action.payload, 'state in mutate:', state);
      state.name = action.payload;
      console.log('after mutated state', state);
      return state;
    case 'IMG_CHANGED':
      console.log('in mutate img changed', action.payload.toLowerCase(), 'state in mutate:', state);
      state.img = './assets/' + action.payload.toLowerCase() + '.jpg';
      console.log('after mutated img state', state);
      return state;*/
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
