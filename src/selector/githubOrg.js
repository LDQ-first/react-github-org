import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const githubOrgSelector = createSelector(
    selectGolbal,
    appState => appState.get('githubOrg')
)


export const githubOrgInfosSelector = createSelector(
    githubOrgSelector,
    githubOrgState => githubOrgState.get('githubOrgInfos')
)

export const isLoadingSelector = createSelector(
    githubOrgSelector,
    githubOrgState => githubOrgState.get('isLoading')
)

export const errorMsgSelector = createSelector(
    githubOrgSelector,
    githubOrgState => githubOrgState.get('errorMsg')
)

export const nameSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('name')
    }
)

export const loginSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('login')
    }
)



export const avatarSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('avatarUrl')
    }
)

export const descriptionSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('description')
    }
)

export const createdAtSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('createdAt')
    }
)

export const updatedAtSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('updatedAt')
    }
)

export const githubUrlSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('githubUrl')
    }
)


export const publicReposSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('publicRepos')
    }
)

export const blogSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('blog')
    }
)

export const locationSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('location')
    }
)

export const typeSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('type')
    }
)

export const ReposSelector = createSelector(
    githubOrgInfosSelector,
    githubOrgInfosState => {
        if(!githubOrgInfosState) return
        return githubOrgInfosState.get('Repos')
    }
)



