import test from 'tape';
import Rx from 'rxjs/Rx';
import { Store } from '../../overvue_node_modules/OverVue';
import { commitUsernameAndPassword } from '../src/overvue/actions';
import mutate from '../src/overvue/mutate';
import store from '../src/overvue/store';
import applyMixin from '../../overvue_node_modules/mixin';

const motherstream = new Store({ state: { "initial": "state" } });
test('motherstream is a BehaviorSubject', (t) => {
  t.plan(1);
  t.ok(motherstream.motherStream$ instanceof Rx.BehaviorSubject);
});

test('actions are converted to Observables', (t) => {
  t.plan(1);
  const streamTest = motherstream.createStateStream({ "state": "test" });
  t.ok(streamTest instanceof Rx.Observable);
});

test('motherstream has a state object', (t) => {
  t.plan(1);
  t.ok(typeof motherstream.state === 'object');
});

test('SET_USER_PASSWORD correctly sets username and password', (t) => {
  t.plan(2);
  const username = 'frodo';
  const password = 'baggins';
  mutate(store.state, {
    type: 'SET_USER_PASSWORD',
    payload: { username, password },
  });
  t.ok(store.state.password === password);
  t.ok(store.state.username === username);
});


test('SET_FEED_URLS populates the feedItems property in store', (t) => {
  t.plan(1);
  mutate(store.state, {
    type: 'SET_FEED_URLS',
    payload: ['http://localhost:8080/InstaData/gandalf1'],
  });
  t.ok(store.state.feedItems[0] === 'http://localhost:8080/InstaData/gandalf1');
});

//  Still in progress
test('commitUsernameAndPassword updates the state', (t) => {
  t.plan(2);
  const username = 'samwise';
  const password = 'gamgee';
  commitUsernameAndPassword({ username, password });
  t.ok(store.state.password === password);
  t.ok(store.state.username === username);
});


// still in progress
// test('dispatchAction will return an action object', (t) => {
//   const motherstream = new Store();
//   t.plan(1);
//   let testAction = motherstream.dispatchAction((el) => {return {type: 'SET_FEED_URLS', payload: 'http://localhost:8080/InstaData/gandalf1'}, 'http://localhost:8080/InstaData/gandalf1'});
//   t.ok(typeof testAction === 'object');
// })


