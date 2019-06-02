import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	current: "",
  	lists: []
  },
  mutations: {
  	addItem (state, value) {
  		state.lists.push(value);
  	},
  	setCurrent (state, value) {
  		state.current = value;
  	}
  },
  actions: {

  }
})
