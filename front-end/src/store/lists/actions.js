export default {
	addTodo  	: ( {commit}, param ) => { commit( 'ADDTODO', {list: param} ) },
	eventDone 	: ( {commit}, param ) => { commit( 'EVENTDONE', {id: param} ) },
	eventTodo 	: ( {commit}, param ) => { commit( 'EVENTTODO', {id: param} ) },
	eventCancel	: ( {commit}, param ) => { commit( 'EVENTCANCEL', {id: param} ) },
	dataClear	: ( {commit}, param ) => { commit( 'DATACLEAR') },
	dataInput	: ( {commit}, param ) => { commit( 'DATAINPUT', param ) },
	dataDelete	: ( {commit}, param ) => { commit( 'DATADELETE', param ) },
	dataEdit	: ( {commit}, param ) => { commit( 'DATAEDIT', param ) },
}