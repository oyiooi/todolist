let id=0
const addList = (text)=>{console.log('addddd');id++;
    return {
        type: 'Addlist',
        text: text,
        id: id
    }
}

const filterList = (filterState)=>{
    return {
    type: 'show',
    filterState:filterState
}}

 const changeCompleted = (id)=>{console.log('okkkk');return {
    type: 'changeCompleted',
    id :id
}}

export default { addList , filterList , changeCompleted }


