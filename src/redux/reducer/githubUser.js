import {
    GET_GITHUBUSER_INFO_REQUEST,
    GET_GITHUBUSER_INFO_SUCCESS,
    GET_GITHUBUSER_INFO_FAIL
} from '../const/const'
import { fromJS, Map } from 'immutable'


const initState = fromJS({
    status: 0,
    isLoading: false,
    githubUserInfos: {},
    errorMsg: ''
})

export default (state = initState, action) => {
    switch(action.type) {
        case GET_GITHUBUSER_INFO_REQUEST:
            return state.set('isLoading', true)
        case GET_GITHUBUSER_INFO_SUCCESS:
            return (state = fromJS({
                ...state,
                status: 200,
                isLoading: false,
                githubUserInfos: action.githubUserInfo
            }))
        case GET_GITHUBUSER_INFO_FAIL:
            return (state = fromJS({
                ...state,
                status: 404,
                errorMsg: '请求的用户不存在'
            }))
        default: 
             return state
    }
}