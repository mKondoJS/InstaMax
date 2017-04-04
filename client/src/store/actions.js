import { Observable } from 'rxjs/Rx';
import store from './store';

export const commitFeedUrls = store.dispatchAction((urls) => {
  fetch(urls)
    .then((response) => {
      if (response.status === 200) {
        // .json() also returns a promise,
        // which we'll handle in the next .then
        return response.json();
      }
    })
    .then((data) => {
      console.log('response', data);
      // dispatch an action into the motherStream$
      commitFeedUrls2(
        {
          type: 'SET_FEED_URLS',
          payload: data,
        });
    })
    .catch((error) => {
      console.error('Error fetching', error);
    });
});

export const commitUsernameAndPassword = store.dispatchAction(payload => ({
  type: 'SET_USER_PASSWORD',
  payload,
}));

export const commitFeedUrls2 = store.dispatchAction(data => ({
  type: 'SET_FEED_URLS',
  payload: data.payload,
}));
