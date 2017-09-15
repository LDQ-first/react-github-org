import React, { Component } from 'react'
import Mask from '../../../static/img/Mask.png'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import List, { ListItem, ListItemText } from 'material-ui/List'
import ListIcon from 'material-ui-icons/List'
import Img from '../Img/Img.js'



export default class GithubContent extends Component {
    static get propTypes() { 
        return { 
            name: PropTypes.string,
            login: PropTypes.string,
            avatar: PropTypes.string,
            type: PropTypes.string,
            githubUrl: PropTypes.string,
            des: PropTypes.string,
            list: PropTypes.array,
            ReposList: PropTypes.array
        }
    }



    render() {

        const {name, login, avatar, type, githubUrl, des, list, ReposList} = this.props


        return (
           <div>
                <header className="header">
                    <h2 className="name">{name}({type})</h2>
                    <div className="intro">
                        <div className="bio">
                            <div className="avatarWrapper">
                                    <img className="overlay" src={Mask} />
                                    <Img className="avatar" src={avatar} alt={name} title={name} />
                            </div>
                            <h3 className="login">{login}</h3>
                            <span className="des">{des}</span>
                        </div>
                        <List className="list" >
                            {list}
                        </List>
                    </div>
                    <Button href={githubUrl} target="_blank" className="githubUrl">
                        <svg className="icon item-icon" aria-hidden="true">
                            <use xlinkHref="#icon-github"></use>
                        </svg>
                        <h4>查看{login}的Github</h4>
                    </Button>
                </header>
                <article className="main">
                    <header className="main-header">
                        <ListIcon className="main-header-icon"/>
                        <h2 className="main-header-title">仓库列表</h2>
                    </header>
                    <List className="repos">
                        {ReposList}
                    </List>
                </article>
            </div>
        )
    }
}
