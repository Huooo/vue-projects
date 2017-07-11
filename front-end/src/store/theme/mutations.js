import * as func from '../function.js';

export default {
	SWITCHTHEME: function(states, obj){
		states.theme = obj.theme;
		func.theme_storage.set(states);
	}
}