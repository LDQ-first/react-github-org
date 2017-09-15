import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const githubUserSelector = createSelector(
    selectGolbal,
    appState => appState.get('githubUser')
)


export const githubUserInfosSelector = createSelector(
    githubUserSelector,
    githubUserState => githubUserState.get('githubUserInfos')
)

export const isLoadingSelector = createSelector(
    githubUserSelector,
    githubUserState => githubUserState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    githubUserSelector,
    githubUserState => githubUserState.get('errorMsg')
)

export const statusSelector = createSelector(
    githubUserSelector,
    githubUserState => githubUserState.get('status')
)

export const nameSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('name')
    }
)

export const loginSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('login')
    }
)

export const avatarSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('avatarUrl')
    }
)

export const createdAtSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('createdAt')
    }
)

export const updatedAtSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('updatedAt')
    }
)

export const githubUrlSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('githubUrl')
    }
)


export const publicReposSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('publicRepos')
    }
)

export const followersSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('followers')
    }
)

export const followingSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('following')
    }
)


export const companySelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('company')
    }
)


export const blogSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('blog')
    }
)


export const locationSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('location')
    }
)


export const bioSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('bio')
    }
)

export const typeSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('type')
    }
)



export const ReposSelector = createSelector(
    githubUserInfosSelector,
    githubUserInfosState => {
        if(!githubUserInfosState) return
        return githubUserInfosState.get('Repos')
    }
)



