import { connect } from 'react-redux'
import actions from './actions'
import List from './list'

let {changeCompleted}= actions

const filterList= (list,filter) => {
    console.log(filter)
    switch (filter) {
        case 'O' :
            return list.filter((item)=>item.completed)
        case 'T' :
            return list.filter((item)=>!item.completed)
        case 'A' :
            return list
        default : 
            return list
    }
}

const mapStateToProps = state => {
    return {
        list: filterList(state.list,state.filterState)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeFilter: (id)=>{console.log(id);dispatch(changeCompleted(id))}
    }
}

const GetList = connect(mapStateToProps,mapDispatchToProps)(List)

export default GetList