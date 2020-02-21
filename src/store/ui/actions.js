import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {
  [actionTypes.UI_SIDENAV_TOGGLE]({ commit }, opened) {
    commit(mutationTypes.UI_SIDENAV_TOGGLED, opened);
  }
};
