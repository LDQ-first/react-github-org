import {
    GET_GITHUBORG_INFO_REQUEST,
    GET_GITHUBORG_INFO_SUCCESS,
    GET_GITHUBORG_INFO_FAIL
} from '../const/const'
import { fromJS, Map } from 'immutable'


const initState = fromJS({
    status: 0,
    isLoading: false,
    githubOrgInfos: {},
    errorMsg: ''
})

export default (state = initState, action) => {
    switch(action.type) {
        case GET_GITHUBORG_INFO_REQUEST:
            return state.set('isLoading', true)
        case GET_GITHUBORG_INFO_SUCCESS:
            return (state = fromJS({
                ...state,
                status: 200,
                isLoading: false,
                githubOrgInfos: action.githubOrgInfo
            }))
        case GET_GITHUBORG_INFO_FAIL:
            return (state = fromJS({
                ...state,
                status: 404,
                errorMsg: '请求的组织不存在'
            }))
        default: 
             return state
    }
}