export default {
	addList: function ({commit}, param) {
		commit('ADDLIST', {list: param});
	}
}