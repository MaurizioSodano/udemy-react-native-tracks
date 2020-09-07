import createDataContext from "./createDataContext";
//Reducer
const locationReducer=(state,action)=>{
    switch(action.type){
        case "add_current_location":
            return {...state,currentLocation:action.payload};
        default:
            return state;
    }
}

// action functions
const startRecording=dispatch=>()=>{};
const stopRecording=dispatch=>()=>{};
const addLocation=dispatch=>(location)=>{
    console.log(`Dispatching current Location: ${location}`)
    dispatch({type:"add_current_location",payload:{location}})
};

export const {Provider,Context}=createDataContext(
    locationReducer,
    {startRecording, stopRecording,addLocation},
    {
        recording:false,
        currentLocation:null,
        locations:[]
    }
)
