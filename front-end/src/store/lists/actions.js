export default {
	addTodo  	: ( {commit}, param ) => { commit( 'ADDTODO', {list: param} ) },
	eventDone 	: ( {commit}, param ) => { commit( 'EVENTDONE', {id: param} ) },
	eventTodo 	: ( {commit}, param ) => { commit( 'EVENTTODO', {id: param} ) },
	eventCancel	: ( {commit}, param ) => { commit( 'EVENTCANCEL', {id: param} ) },
}