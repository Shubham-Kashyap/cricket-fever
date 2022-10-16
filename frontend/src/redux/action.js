import { post_api_call } from "../helpers/api_calls";

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