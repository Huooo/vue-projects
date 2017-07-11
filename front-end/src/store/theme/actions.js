export default {
	switch_theme: function ({commit}, param) {
		commit('SWITCHTHEME', {theme: param});
	}
}