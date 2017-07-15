import * as func from '../function.js';

export default {
	ADDLIST: function(states, obj){
		states.count++;
		obj.list.id = states.count;
		states.list.unshift(obj.list);
		func.note_storage.set(states);
	}
}