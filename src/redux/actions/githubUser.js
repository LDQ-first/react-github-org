import {
    GET_GITHUBUSER_INFO_REQUEST,
    GET_GITHUBUSER_INFO_SUCCESS,
    GET_GITHUBUSER_INFO_FAIL,
} from '../const/const'
import axios from 'axios'
import {githubApi} from '../../api/api'

/*action creator*/
export const getGithubUserInfoRequest = () => {
    return {
        type: GET_GITHUBUSER_INFO_REQUEST
    }
}

export const getGithubUserInfoSuccess = (githubUserInfo) => {
    return {
        type: GET_GITHUBUSER_INFO_SUCCESS,
        githubUserInfo: githubUserInfo
    }
}

export const getGithubUserInfoFail = () => {
    return {
        type: GET_GITHUBUSER_INFO_FAIL
    }
}

/* GithubUser dispatch */
/*export const getGithubUser = (user) => {
    return (dispatch) => {
        dispatch(getGithubUserInfoRequest())

        return axios.get(`${githubApi.githubUser}/${user}`)
                    .then(res => res.data)
                    .then(data => {
                        dispatch(getGithubUserInfoSuccess(data))
                    }).catch( err => {
                        dispatch(getGithubUserInfoFail())
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
        bio: data.bio,
        blog: data.blog,
        location: data.location,
        company: data.company,
        publicRepos: data.public_repos,
        following: data.following,
        followers: data.followers,
        type: data.type,
        Repos: data.Repos,
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

export const getGithubUser = (user) => async (dispatch) => {
    console.log(user)
   try {
       dispatch(getGithubUserInfoRequest())
       let res = await axios.get(`${githubApi.githubUser}/${user}`)
       console.log('status: ', res.status)
       console.log('data: ', res.data)
       if(res.data.repos_url) {
           let repos = await axios.get(res.data.repos_url)
           res.data.Repos = filterRepos(repos.data)
       }
       await dispatch(getGithubUserInfoSuccess(filterData(res.data)))
   } catch (err) {
       console.log('err:', err)
       dispatch(getGithubUserInfoFail())
   }
}
