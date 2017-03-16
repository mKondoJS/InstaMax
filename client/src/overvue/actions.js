import store from './store';
import { Observable } from 'rxjs/Rx';
// import { filter } from 'lodash';

console.log(store);

export const commitFeedUrls = store.actionCreator((urls) => {
  console.log('in commitFeedUrls', typeof urls);
  let payloadUrls = [];

  fetch(urls)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.map((img) => {
        return fetch(img);
      });
    })
    .then((promiseArr) => {
      promiseArr.forEach((img) => {
        img.then((res) => {
          if (res.status === 200) {
            return {
              type: 'FEED_URLS',
              payload: res.url,
            };
          }
        });
      });
    });

  console.log(payloadUrls);
  /*
  return {
    type: 'SET_FEED_URLS',
    payload: Observable.ajax(urls)
      .map((xhr) => {
        // console.log('response', xhr.response);
        return xhr.response.filter(url => {
          // console.log('url', url);
          fetch(url).then((res) => {
            // console.log('res', res);
            if(res.status === 200) {
              console.log('this is res.url', res.url, 'this is the status', res.status);

              // console.log('followers', followers);
              return {
                type: 'GITHUB_FOLLOWERS_LOADED',
                payload: res.url,
              };
            };
          }).catch((err) => console.log('error', err));
        });
      }),

  */    // .map((url) => {
      //     console.log('URL', url, 'type', typeof url);
      //     Observable.ajax(url)
      //     .map((xhr2) => {
      //       console.log('inner status', xhr2.status);
      //       console.log('inner response', xhr2.response);
      //       return xhr2.status;
      //     });
      //   }
      // )
    /*payload: Observable.ajax(urls)
      .map((xhr) => {
        console.log('response', xhr.response);
        return xhr.response.filter(url => {
          console.log('URL', url);
          Observable.ajax(url)
            .map((xhr2) => {
              console.log('inner status', xhr2.status);
              console.log('inner response', xhr2.response);
              if (xhr2.status === 200) return url;
            });
        });
      })*/

});

export const commitUsernameAndPassword = store.actionCreator((payload) => ({
  type: 'SET_USER_PASSWORD',
  payload,
}));

export const commitFeedUrls2 = store.actionCreator((payload) => ({
  type: 'SET_FEED_URLS',
  payload,
}));
