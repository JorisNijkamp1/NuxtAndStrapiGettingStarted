import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export const getDefaultState = () => ({
    restaurants: []
});

const state = getDefaultState();



export const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {}
})