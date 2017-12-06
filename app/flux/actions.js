 import {SEARCH_VIEW_ACTIONS} from './constants.js';
 import Dispatcher from './dispatcher.js';
 import searchApi from '../api/searchApi.js';


let Actions = {
  getTrending: function() {
    console.log('getTrending');
    let action = {actionType: SEARCH_VIEW_ACTIONS.GET_TRENDING, gifs:['g1','g2']}
    Dispatcher.handleViewAction(action);
  },

  searchGifs: function() {
    console.log('call api to seach gifs');
    let action = {actionType: SEARCH_VIEW_ACTIONS.SEARCH_GIFS}
    Dispatcher.handleViewAction(action);
  }
}

export default Actions;
