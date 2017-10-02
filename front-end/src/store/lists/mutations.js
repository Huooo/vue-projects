import * as func from '../function.js';

export default {
	
	ADDTODO ( states, obj ) {
		
		states.count++;
		obj.list.id = states.count;
		states.list.unshift( obj.list );
		func.note_storage.set( states );
	},

	EVENTDONE ( states, obj ) {
		
		let doneItem = null;

		for ( let i = 0, lens = states.list.length; i < lens; i++ ) {
			if ( states.list[i].id === obj.id ) {
				states.list[i].type = 2;
				states.list[i].time = func.getDate();
				doneItem = states.list[i];
				states.list.splice(i, 1);
				break;
			}
		}

		states.list.unshift( doneItem );
		func.note_storage.set( states );
	},

	EVENTTODO ( states, obj ) {

		let todoItem = null;

		for ( let i = 0, lens = states.list.length; i < lens; i++ ) {
			if ( states.list[i].id === obj.id ) {
				states.list[i].type = 1;
				states.list[i].time = '';
				todoItem = states.list[i];
				states.list.splice(i, 1);
				break;
			}
		}

		states.list.unshift( todoItem );
		func.note_storage.set( states );
	},

	EVENTCANCEL ( states, obj ) {

		let cancelItem = null;

		for ( let i = 0, lens = states.list.length; i < lens; i++ ) {
			if ( states.list[i].id === obj.id ) {
				states.list[i].type = 3;
				cancelItem = states.list[i];
				states.list.splice(i, 1);
				break;
			}
		}

		states.list.unshift( cancelItem );
		func.note_storage.set( states );
	},

	DATACLEAR ( states ) {

		states.list = [];
		func.note_storage.clear();
	},

	DATAINPUT ( states, data ) {

		data = JSON.parse( data );
		states.list = data.lists.list;
		states.count = data.lists.count;
		func.note_storage.set( states );
	},

	DATADELETE ( states, data ) {

		if ( states.list[data.index].id === data.id ) {
			states.list.splice( data.index, 1 );
		} else {
			states.list.filter( ( item, index ) => {
				( item.id === data.id ) && ( states.list.splice( index, 1 ) );
			});
		}

		func.note_storage.set( states ); 
	},

	DATAEDIT ( states, data ) {

		if ( states.list[data.index].id === data.id  ) {
			states.list[data.index].content = data.content;
		} else {
			states.list.filter( ( item,index ) => {
				( item.id === data.id ) && ( item.content = data.content );
			});
		}

		func.note_storage.set( states );
	}
}