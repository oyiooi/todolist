import { connect } from 'react-redux'
import actions from './actions'
import Add from './add'

let {addList} = actions
console.log(addList)

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: value  =>{ console.log('addd');dispatch(addList(value)) }
    }
}

const GetAdd = connect (mapStateToProps,mapDispatchToProps)(Add)

export default GetAdd