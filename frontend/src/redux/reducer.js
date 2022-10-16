import { createReducer } from "@reduxjs/toolkit";
import action from "./action";

const authInitialState = {
    loggedInUser: null,
}

const dataReducer = createReducer(authInitialState, {
    setLoggedInUserData: action.loggedInUserProfile,

});


export { dataReducer };
