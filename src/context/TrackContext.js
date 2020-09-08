import createDataContext from './createDataContext';
import trackerApi from "../api/tracker";

//1.reducer
const trackReducer=(state,action)=>{
    switch(action.type){
        default:
            return {state}
    }
}
//2.action functions
const fetchTracks=dispatch=>()=>{};
const createTrack=dispatch=>async (name,locations)=>{
    await trackerApi.post("/tracks",{name,locations});
};

//3.export
export const {Provider,Context}=createDataContext(
    trackReducer,               //reducer
    {fetchTracks,createTrack},   //action functions
    []                          //initial state
)