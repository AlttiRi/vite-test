const state = () => ({
    /** @type {String} */
    textarea: // ""
        [
        "*.example.com",
        "*.example-2.com",
        // "*.example.example.com",
        // "*.example.com",
    ].join("\n"), // todo remove later
});

const mutations = {
    setText(state, text) {
        state.textarea = text;
    },
    clearText(state) {
        state.textarea = "";
    }
};

export default {
    namespaced: true,
    state,
    mutations
}