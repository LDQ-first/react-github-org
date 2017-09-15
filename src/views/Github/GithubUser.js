import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GithubUserDiv } from '../../styled/Github'
import SearchCom from '../../components/Search/Search'
import * as githubUserInfoActions  from '../../redux/actions/githubUser'
import {connect} from 'react-redux'
import Progress from '../../components/Loading/progress'
import {formatTime} from '../../utils/'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import BusinessIcon from 'material-ui-icons/Business'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import ReorderIcon from 'material-ui-icons/Reorder'
import StarIcon from 'material-ui-icons/Star'
import PersonAddIcon from 'material-ui-icons/PersonAdd'
import AlarmAddIcon from 'material-ui-icons/AlarmAdd'
import AlarmOnIcon from 'material-ui-icons/AlarmOn'
import ErrorIcon from 'material-ui-icons/Error'
import Immutable from 'immutable'
import Error from '../../components/Error/Error.js'
import ReposLists from '../../components/ReposLists/ReposLists.js'
import GithubContent from '../../components/GithubContent/GithubContent.js'



import {
    isLoadingSelector,
    errorMsgSelector,
    statusSelector,
    nameSelector,
    loginSelector,
    avatarSelector,
    createdAtSelector,
    updatedAtSelector,
    githubUrlSelector,
    publicReposSelector,
    publicGistsSelector,
    followersSelector,
    followingSelector,
    companySelector,
    blogSelector,
    locationSelector,
    bioSelector,
    typeSelector,
    ReposSelector
} from '../../selector/githubUser'


const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),   
    status: statusSelector(state),
    name: nameSelector(state),  
    login: loginSelector(state),
    avatar: avatarSelector(state),
    createdAt: createdAtSelector(state),
    updatedAt: updatedAtSelector(state),
    githubUrl: githubUrlSelector(state),
    publicRepos: publicReposSelector(state),
    followers: followersSelector(state),
    following: followingSelector(state),
    company: companySelector(state),
    blog: blogSelector(state),
    location: locationSelector(state),
    bio: bioSelector(state),
    type: typeSelector(state),
    Repos: ReposSelector(state)
})


class GithubUser extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getGithubUser: PropTypes.func.isRequired,
            status: PropTypes.number.isRequired,
            name: PropTypes.string,
            login: PropTypes.string,
            avatar: PropTypes.string,
            createdAt: PropTypes.string,
            updatedAt: PropTypes.string,
            githubUrl: PropTypes.string,
            reposUrl: PropTypes.string,
            company: PropTypes.string,
            blog: PropTypes.string,
            location: PropTypes.string,
            bio: PropTypes.string,
            publicRepos: PropTypes.number,
            followers: PropTypes.number,
            following: PropTypes.number,
            type: PropTypes.string,
            Repos: PropTypes.array
        }
    }

    

    constructor (props) {
        super(props)

        const {company, blog ,location, bio, publicRepos,
              followers ,following, Repos} = this.props
        let { createdAt, updatedAt } = this.props
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)
          const jsRepos = Immutable.List(Repos).toJS()

        this.state = {
            userLists : [
                { item: company, title: '公司' ,icon: <BusinessIcon className="list-icon"/> },
                { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
                { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
                { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> },
                { item: followers, title: '粉丝数' ,icon: <PersonAddIcon className="list-icon"/> },
                { item: following, title: '关注数' ,icon: <StarIcon className="list-icon"/> },
                { item: createdAt, title: '创建时间' ,icon: <AlarmAddIcon className="list-icon"/> },
                { item: updatedAt, title: '最近更新时间' ,icon: <AlarmOnIcon className="list-icon"/> }
            ],
            Repos: jsRepos
        }
        
    }
       
    
    componentWillReceiveProps (nextProps) {
         const {company, blog ,location, bio, publicRepos,
              followers ,following, Repos} = nextProps
         let { createdAt, updatedAt } = nextProps
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)

        const userLists = [
                { item: company, title: '公司' ,icon: <BusinessIcon className="list-icon"/> },
                { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
                { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
                { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> },
                { item: followers, title: '粉丝数' ,icon: <PersonAddIcon className="list-icon"/> },
                { item: following, title: '关注数' ,icon: <StarIcon className="list-icon"/> },
                { item: createdAt, title: '创建时间' ,icon: <AlarmAddIcon className="list-icon"/> },
                { item: updatedAt, title: '最近更新时间' ,icon: <AlarmOnIcon className="list-icon"/> }
            ]
        
         const jsRepos = Immutable.List(Repos).toJS()

        this.setState({
            userLists: userLists,
            Repos: jsRepos
        })

    }
    

    
    _searchUser (value) {
        console.log('value: ', value)
        if(value === '') {
            console.log(value)
            return
        }

        this.props.getGithubUser(value.trim())
    }

    _keySearch (e) {
        if(e.keyCode === 13) {
            const value = e.target.value
            this._searchUser(value)
        }
    }

    _iconSearch () {
        const value = this._search.value
        this._searchUser(value)
    }

    render() {
         const {isLoading, errorMsg, name, login, avatar, bio, githubUrl, type } = this.props

         const userList = this.state.userLists.map((list, index) => {
             return (
                 <ListItem  key={index} button className="list-item">
                    <Avatar className="item-icon">
                        {list.icon}
                    </Avatar>
                    <h3 className="item-title">
                        {list.title}: 
                    </h3>
                    <span className="item">
                        {list.item}
                    </span>
                </ListItem>
             )
         })

         const ReposList = this.state.Repos.map((list, index) => {
             return (
                 <ReposLists  key={index} list={list} />
             )
         })

        return (
            <GithubUserDiv className="githubUser">
                <h1 className="title">Find Github User</h1>
                <SearchCom
                     label = "User"
                     placeholder= '请输入用户名（Please input username）'
                     helperText = "To Search User!"
                     ariaLabel = "To Search User"
                     _this = {this}
                />
                {
                    isLoading ? <Progress/> : (
                        errorMsg ?  <Error errorMsg={errorMsg} /> : 
                        <GithubContent name={name} type={type}  avatar={avatar} login={login} 
                        des={bio} list={userList} ReposList={ReposList} githubUrl={githubUrl}/>
                        
                    )
                }
            </GithubUserDiv>
        )
    }
}


export default connect(
    mapStateToProps,
    githubUserInfoActions
)(GithubUser)