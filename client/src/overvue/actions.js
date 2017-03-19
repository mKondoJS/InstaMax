import store from './store';
import { Observable } from 'rxjs/Rx';
// import { filter } from 'lodash';

console.log(store);

export const commitFeedUrls = store.actionCreator((urls) => {
  console.log('in commitFeedUrls', typeof urls, urls);

  fetch(urls)
    .then((response) => {
      if (response.status === 200) {
        response.json()
          .then((data) => {
          console.log('response', data);
          commitFeedUrls2(
            {
              type: 'SET_FEED_URLS',
              payload: data,
            }
          );
        });
      }
    })
    .catch((error) => {
      console.error('Error fetching', error);
    });
});

export const commitUsernameAndPassword = store.actionCreator((payload) => ({
  type: 'SET_USER_PASSWORD',
  payload,
}));

export const commitFeedUrls2 = store.actionCreator((data) => ({
  type: 'SET_FEED_URLS',
  payload: data.payload,
}));
