import Dispatcher from './dispatcher.js';
import {SEARCH_SERVER_ACTIONS, SEARCH_VIEW_ACTIONS} from './constants.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = "CHANGE_EVENT";
let trendingGifs = [];
let gifs = [];

let _store = {
  /* flux functions - components can subscribe to listen to store changes */
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  listen: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  unlisten: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  getGifs: function() {
    return gifs;
  }
}

let Store = Object.assign({}, EventEmitter.prototype, _store);

/* flux: dispatcher broadcasts actions */
Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {

      case SEARCH_VIEW_ACTIONS.GET_TRENDING:
          trendingGifs = action.gifs;
          console.log('get trending');
          gifs = [
            {
              source: 'https://media0.giphy.com/media/l1IYcF8IsfnL2Yzwk/giphy-preview.gif',
              width: '151',
              height: '85'
            }
          ];
          Store.emitChange();
          break;

      case SEARCH_VIEW_ACTIONS.SEARCH_GIFS:
          console.log('search gifs view action');
          gifs = [
            {
              source: 'https://media0.giphy.com/media/xUPGchYUwAof91WGqI/giphy-preview.gif',
              width: '108',
              height: '81'
            }
          ];
          Store.emitChange();
          break;
      default:
        // do nothing
    }

    return true;
  }
);

export default Store;
