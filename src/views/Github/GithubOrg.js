import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GithubOrgDiv } from '../../styled/Github'
import SearchCom from '../../components/Search/Search'
import * as githubOrgInfoActions  from '../../redux/actions/githubOrg'
import {connect} from 'react-redux'
import Progress from '../../components/Loading/progress'
import {formatTime} from '../../utils/'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
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
    nameSelector,
    loginSelector,
    avatarSelector,
    createdAtSelector,
    updatedAtSelector,
    githubUrlSelector,
    publicReposSelector,
    blogSelector,
    locationSelector,
    typeSelector,
    descriptionSelector,
    ReposSelector
} from '../../selector/githubOrg'


const mapStateToProps = (state) => ({
    isLoading: isLoadingSelector(state),
    errorMsg: errorMsgSelector(state),   
    name: nameSelector(state),  
    login: loginSelector(state),
    avatar: avatarSelector(state),
    createdAt: createdAtSelector(state),
    updatedAt: updatedAtSelector(state),
    githubUrl: githubUrlSelector(state),
    publicRepos: publicReposSelector(state),
    blog: blogSelector(state),
    location: locationSelector(state),
    type: typeSelector(state),
    description: descriptionSelector(state),
    Repos: ReposSelector(state)
})



class GithubOrg extends Component {
    static get propTypes() { 
        return { 
            isLoading: PropTypes.bool.isRequired,
            errorMsg: PropTypes.string.isRequired,
            getGithubOrg: PropTypes.func.isRequired,
            name: PropTypes.string,
            login: PropTypes.string,
            avatar: PropTypes.string,
            createdAt: PropTypes.string,
            updatedAt: PropTypes.string,
            githubUrl: PropTypes.string,
            blog: PropTypes.string,
            location: PropTypes.string,
            publicRepos: PropTypes.number,
            type: PropTypes.string,
            description: PropTypes.string,
            Repos: PropTypes.array
        }
    }

    constructor (props) {
        super(props)

        const {blog ,location, publicRepos, Repos} = this.props
        let { createdAt, updatedAt } = this.props
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)
         const jsRepos = Immutable.List(Repos).toJS()

        this.state = {
            orgLists :  [
                { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
                { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
                { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> },
                { item: createdAt, title: '创建时间' ,icon: <AlarmAddIcon className="list-icon"/> },
                { item: updatedAt, title: '最近更新时间' ,icon: <AlarmOnIcon className="list-icon"/> }
            ],
            Repos: jsRepos
        }

        
    }
       
    
    
    componentWillReceiveProps (nextProps) {
         const {blog ,location, publicRepos, Repos } = nextProps
          let { createdAt, updatedAt } = nextProps
         createdAt = formatTime(createdAt)
         updatedAt = formatTime(updatedAt)

        const orgLists =  [
                { item: <a className="link" href={blog} target="_blank">博客</a>, title: '博客' ,icon: <ModeEditIcon className="list-icon" /> },
                { item: location, title: '地址' ,icon: <LocationOnIcon className="list-icon"/> },
                { item: publicRepos, title: '公开仓库数' ,icon: <ReorderIcon className="list-icon"/> },
                { item: createdAt, title: '创建时间' ,icon: <AlarmAddIcon className="list-icon"/> },
                { item: updatedAt, title: '最近更新时间' ,icon: <AlarmOnIcon className="list-icon"/> }
            ]
        

         console.log(Immutable.List.isList(Repos))
         console.log(Immutable.List(Repos).toJS())
         const jsRepos = Immutable.List(Repos).toJS()
       

        this.setState({
            orgLists: orgLists,
            Repos: jsRepos
        })
    }
    

    _searchOrg (value) {
        console.log('value: ', value)
        if(value === '') {
            console.log(value)
            return
        }
        this.props.getGithubOrg(value.trim())
    }

    _keySearch (e) {
        if(e.keyCode === 13) {
            const value = e.target.value
            this._searchOrg(value)
        }
    }

    _iconSearch () {
        const value = this._search.value
        this._searchOrg(value)
    }

    render() {

        console.log('this.state.orgLists: ', this.state.orgLists)
         const {isLoading, errorMsg, name, login, avatar, githubUrl, type, description } = this.props


          const orgList = this.state.orgLists.map((list, index) => {
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
            <GithubOrgDiv>
                <h1 className="title">Find Github Org</h1>
                <SearchCom
                     label = "Org"
                     placeholder= '请输入组织名（Please input orgname）'
                     helperText = "To Search Org!"
                     ariaLabel = "To Search Org"
                     _this = {this}
                />
                 {
                    isLoading ? <Progress/> : (
                        errorMsg ? <Error errorMsg={errorMsg} /> : 
                        <GithubContent name={name} type={type}  avatar={avatar} login={login} 
                        des={description} list={orgList} ReposList={ReposList} githubUrl={githubUrl}/>
                    )
                }
            </GithubOrgDiv>
        )
    }
}
 

export default connect(
    mapStateToProps,
    githubOrgInfoActions
)(GithubOrg)