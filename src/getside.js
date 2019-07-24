import { connect } from 'react-redux'
import Side from './side'
import actions from './actions'

let {filterList} = actions
console.log(filterList)
const mapStateToProps = state => {
    return {
        filterState:  state.filterState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToChange: str => {dispatch(filterList(str))}
    }
}

const GetSide = connect (mapStateToProps,mapDispatchToProps)(Side)

export default GetSide