import Vue from 'vue';
import Vuex from 'vuex';

import theme from './theme';
import lists from './lists';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		theme, lists
	}
});