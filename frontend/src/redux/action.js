
class action {
    /**
     * ------------------------------------------------------------------------
     * logged in user data 
     * ------------------------------------------------------------------------
     */
    loggedInUserProfile = (state, action) => {
        console.log('current logged in user --');
        state.loggedInUser = action.payload
    };
}

export default new action();