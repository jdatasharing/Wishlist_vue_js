export const state = () => ({
    isLoggedIn: false,
    // loginstatus:1
});



export const mutations = {
    setIsLoggedIn(state, payload) {
        console.log("dgdg"+"auth js call.. for mutation in auth.js");
        state.isLoggedIn = payload;
        console.warn(state.isLoggedIn);
        // state.loginstatus = 0;

    }
};

export const actions = {
    
    
    setAuthStatus({ commit, state }, payload) {
        commit('setIsLoggedIn', payload);
        const cookieParams = {
            isLoggedIn: state.isLoggedIn
        };
        
        this.$cookies.set('auth', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
           
        });
    }
};
