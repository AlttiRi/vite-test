import {createStore} from "vuex";
import textarea from "./store/textarea.js";

const store = createStore({
    modules: {
        textarea
    },
    plugins: [logMutation]
});

function logMutation(store) {
    store.subscribe((mutation/*, state*/) => {
        console.log(mutation);
    });
}

export default store;