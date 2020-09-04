import createDataContext from "./createDataContext";

const autReducer=(state,action)=>{
    switch(action.type) {
        default:
            return state;
    }
};

export const {Provider,Context}=createDataContext(
    autReducer,
    {},
    {isSignedIn:false}
)