import { createContext } from "react";

export const initialState = {
    userInfo: null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER_INFO":
            return {
                ...state,
                userInfo: action.payload
            };
        default :
            throw new Error();
    }
}

const MainContext = createContext();

export default MainContext;