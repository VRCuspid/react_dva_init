export default {
    namespace:'model1',
    state:{},
    reducers:{
        save(state,{payload}){
            return {...state,payload}
        }
    },

    effects:{
        *fetch_data({payload},{put,call}){
            
        }
    }
}