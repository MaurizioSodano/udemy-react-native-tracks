import createDataContext from './createDataContext';

//1.reducer
const trackReducer=(state,action)=>{
    switch(action.type){
        default:
            return {state}
    }
}
//2.action functions
const fetchTrack=dispatch=>()=>{};
const createTrack=dispatch=>(name,locations)=>{
    console.log(name,locations.length);
};

//3.export
export const {Provider,Context}=createDataContext(
    trackReducer,               //reducer
    {fetchTrack,createTrack},   //action functions
    []                          //initial state
)