import * as func from '../function.js';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = func.note_storage.get() || { list: [], count: 0 };

export default {
	state,
	actions,
	mutations,
	getters
}