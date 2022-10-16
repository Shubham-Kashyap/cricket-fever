import { createReducer } from "@reduxjs/toolkit";
import { ApiCall } from "../helpers/api_calls";
import action from "./action";

const authInitialState = {
    loggedInUser: null,
}

const dataReducer = createReducer(authInitialState, {
    setLoggedInUserData: action.loggedInUserProfile,

});


export { dataReducer };