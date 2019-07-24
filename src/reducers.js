const initialState = {
    list: [{
        text: 'do one thing',
        completed: false,
        id: 0
    }],
    filterState: 'A'
}

const {list , filterState} = initialState

const List = (state=list,action) => {
    switch (action.type) {
        case 'Addlist':
            return [...state,{
                text: action.text,
                completed: false ,
                id:action.id
            }]
        case 'changeCompleted' :
            return state.map((item)=>{
                if(item.id===action.id){
                    return {
                        text: item.text,
                        completed: !item.completed,
                        id: item.id
                    }
                }else{
                    return item
                }
            })
        default :
            return state
    }
}

const changefilter = (state = filterState ,action)=>{
    switch (action.type) {
        case 'show' :
            return action.filterState
        default :
            return state
    }
}

const addListReducers = (state=initialState,action) => {
    return {
        list: List(state.list,action),
        filterState: changefilter(state.filterState,action)
    }
}

export default addListReducers