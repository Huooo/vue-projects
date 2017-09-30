export default {
	getAllLists (states) {
		return states.list;
	},
	getTodoLists ( states ) {
		return states.list.filter(function ( item ) {
			return item.type === 1 && item;
		});
	},
	getDoneLists (states) {
		return states.list.filter(function ( item ) {
			return item.type === 2 && item;
		});
	},
	getCancelLists (states) {
		return states.list.filter(function ( item ) {
			return item.type === 3 && item;
		});
	}
}