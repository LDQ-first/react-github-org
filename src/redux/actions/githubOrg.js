import {
    GET_GITHUBORG_INFO_REQUEST,
    GET_GITHUBORG_INFO_SUCCESS,
    GET_GITHUBORG_INFO_FAIL,
} from '../const/const'
import axios from 'axios'
import {githubApi} from '../../api/api'

/*action creator*/
export const getGithubOrgInfoRequest = () => {
    return {
        type: GET_GITHUBORG_INFO_REQUEST
    }
}

export const getGithubOrgInfoSuccess = (githubOrgInfo) => {
    return {
        type: GET_GITHUBORG_INFO_SUCCESS,
        githubOrgInfo: githubOrgInfo
    }
}

export const getGithubOrgInfoFail = () => {
    return {
        type: GET_GITHUBORG_INFO_FAIL
    }
}

/* GithubOrg dispatch */
/*export const getGithubOrg = (Org) => {
    return (dispatch) => {
        dispatch(getGithubOrgInfoRequest())

        return axios.get(`${githubApi.githubOrg}/${Org}`)
                    .then(res => res.data)
                    .then(data => {
                        dispatch(getGithubOrgInfoSuccess(data))
                    }).catch( err => {
                        dispatch(getGithubOrgInfoFail())
                    })

    }
}*/


const filterData = (data) => {
    const newData = {
        name: data.name,
        login: data.login,
        avatarUrl: data.avatar_url,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        githubUrl: data.html_url,
        blog: data.blog,
        location: data.location,
        publicRepos: data.public_repos,
        type: data.type,
        description: data.description,
        Repos: data.Repos
    }

    return newData
}


const filterRepos = (repos) => {
   
   const newRepos  = []

    for(let repo of repos) {
        let newRepo = {
            name: repo.name,
            description: repo.description,
            createdAt: repo.created_at,
            updatedAt: repo.updated_at,
            githubUrl: repo.html_url,
            gitUrl: repo.git_url,
            sshUrl: repo.ssh_url,
            cloneUrl: repo.clone_url,
            svnUrl: repo.svn_url,
            stargazersCount: repo.stargazers_count,
            forksCount: repo.forks_count,
            openIssuesCount: repo.open_issues_count
        }
        newRepos.push(newRepo)
    }
   
    return newRepos
}



export const getGithubOrg = (Org) => async (dispatch) => {
    console.log(Org)
   try {
       dispatch(getGithubOrgInfoRequest())
       let res = await axios.get(`${githubApi.githubOrg}/${Org}`)
       console.log('data: ', res.data)
       if(res.data.repos_url) {
           let repos = await axios.get(res.data.repos_url)
           res.data.Repos = filterRepos(repos.data)
       }
       
       await dispatch(getGithubOrgInfoSuccess(filterData(res.data)))
   } catch (err) {
       console.log('err:', err)
       dispatch(getGithubOrgInfoFail())
   }
}
