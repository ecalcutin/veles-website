import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.UI_SIDENAV_TOGGLED](state, opened) {
    state.sideNav.opened = opened;
  }
};
