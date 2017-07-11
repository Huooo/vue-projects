import Vue from 'vue'
import Router from 'vue-router'

import Hello from '../components/Hello'
import UserIndex from '../components/pages/user/index'
import NoteIndex from '../components/pages/note/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
	    { path: '/', name: 'Hello', component: Hello },
	    { path: '/user', name: 'UserIndex', component: UserIndex },
	    { path: '/note', name: 'NoteIndex', component: NoteIndex }
  	]
})
