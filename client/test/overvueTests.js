import test from 'tape';
import { Store } from '../../overvue_node_modules/OverVue';
import { commitUsernameAndPassword } from '../src/overvue/actions';
import store from '../src/overvue/store';
import applyMixin from '../../overvue_node_modules/mixin';
import Rx from 'rxjs/Rx';

const motherstream = new Store({state: {"initial": "state"}});
test('motherstream is a BehaviorSubject', (t) => {
  t.plan(1);
  t.ok(motherstream.motherStream$ instanceof Rx.BehaviorSubject);
});

test('actions are converted to Observables', (t) => {
  t.plan(1);
  let streamTest = motherstream.createStateStream({ "state": "test" });
  t.ok(streamTest instanceof Rx.Observable);
});

test('motherstream has a state object', (t) => {
  t.plan(1);
  t.ok(typeof motherstream.state === 'object');
})

test('correctly input username and password updates state accordingly', (t) => {
  t.plan(1);
  let username = 'frodo';
  let password = 'baggins';
  commitUsernameAndPassword({ username, password });
  t.ok(store.state.password.length > 0);
})



// test('dispatchAction will return an action object', (t) => {
//   const motherstream = new Store();
//   t.plan(1);
//   let testAction = motherstream.dispatchAction((el) => {return {type: 'SET_FEED_URLS', payload: 'http://localhost:8080/InstaData/gandalf1'}, 'http://localhost:8080/InstaData/gandalf1'});
//   t.ok(typeof testAction === 'object');
// })