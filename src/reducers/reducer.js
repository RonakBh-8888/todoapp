const initialData = {
    list: []
}

const reducer = (state=initialData, action) => {
    switch(action.type){
        case "ADD_ITEM":
            const {id, data} = action.payload;
            if(data){
                return {
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id:id,
                            data:data
                        }
                    ]
                }
            }
       
        case "DELETE_ITEM":
            const newList = state.list.filter((elem) => elem.id !== action.id);
           
            return {
                ...state,
                list: newList
            }
    
        case "REMOVE_TODO":
            return {
                ...state,
                list: []
            }    
        case "UPDATE_ITEM":
            const newData = state.list.map((elem) => elem.id === action.id)
            
            return {
                ...state,
                    list:[
                        ...state.list,
                        {
                            newData:newData
                        }
                    ]

            }
        default: return state;    
    }

}

export default reducer;
