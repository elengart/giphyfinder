import {Dispatcher as disp} from 'flux';

let appActions = {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  },

  handleServerAction: function(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    })
  }
}


let Dispatcher = Object.assign(new disp(), appActions);

export default Dispatcher;
