import React, { Component } from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import PropTypes from 'prop-types'
import LinkIcon from 'material-ui-icons/Link'
import IconButton from 'material-ui/IconButton'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import StarIcon from 'material-ui-icons/Star'
import ContentCopyIcon from 'material-ui-icons/ContentCopy'
import AlarmAddIcon from 'material-ui-icons/AlarmAdd'
import AlarmOnIcon from 'material-ui-icons/AlarmOn'
import Button from 'material-ui/Button'
import ErrorIcon from 'material-ui-icons/Error'
import {formatTime} from '../../utils/'
import clipboard from 'clipboard-js'
import Snackbar from 'material-ui/Snackbar'


export default class ReposLists extends Component {
     static get propTypes() { 
        return { 
            list: PropTypes.object.isRequired
        }
    }

    constructor (props) {
        super(props)
        this.state = {
            msg: '',
            result: '',
            vertical: 'top',
            horizontal: 'right',
            open: false
        }
    }

    copy (url) {
        clipboard.copy(url.innerText)
        .then( () => {
            this.setState({
                msg: `复制成功ヾ(^Д^*)/`,
                result: `Url: ${url.innerText}`,
                open: true
            })
        }).catch((err) => {
            this.setState({
                msg: `复制失败/(ㄒoㄒ)/~~`,
                result: `Err: err`,
                open: true
            })
        })
    }

    handleRequestClose = () => {
        this.setState({ open: false })
    }

    render() {
       const {list} = this.props
       const {msg, result, vertical, horizontal, open} = this.state

        return (
              <ListItem className="list-item">
                    <header className="repo-header">
                        <h2 className="repo-name">{list.name}</h2>
                        <h3 className="repo-description">{list.description}</h3>
                    </header>
                    <article className="repo-content">
                         <List className="content-list">
                            <ListItem  className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">gitUrl</h3>
                                    <span className="content-list-url" ref={url => this.gitUrl = url}>{list.gitUrl}</span>    
                                </div>                 
                                <IconButton onClick={() => {
                                    this.copy(this.gitUrl)
                                }} className="content-list-btn" color="blue" aria-label="copy"  title="点击复制链接" ><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem  className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">sshUrl</h3>
                                    <span className="content-list-url" ref={url => this.sshUrl = url}>{list.sshUrl}</span>    
                                </div>                 
                                <IconButton  onClick={() => {
                                    this.copy(this.sshUrl)
                                }} className="content-list-btn" color="blue" aria-label="copy"  title="点击复制链接"><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem   className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">cloneUrl</h3>
                                    <span className="content-list-url" ref={url => this.cloneUrl = url}>{list.cloneUrl}</span>    
                                </div>                 
                                <IconButton onClick={() => {
                                    this.copy(this.cloneUrl)
                                }} className="content-list-btn" color="blue" aria-label="copy"  title="点击复制链接"><ContentCopyIcon/></IconButton>  
                            </ListItem>
                            <ListItem   className="content-list-item">
                                <LinkIcon className="content-list-icon"/>
                                <div className="content-list-main">
                                    <h3 className="content-list-title">svnUrl</h3>
                                    <span className="content-list-url" ref={url => this.svnUrl = url}>{list.svnUrl}</span>    
                                </div>                 
                                <IconButton onClick={() => {
                                    this.copy(this.svnUrl)
                                }} className="content-list-btn" color="blue" aria-label="copy"  title="点击复制链接"><ContentCopyIcon /></IconButton>  
                            </ListItem>
                         </List>
                         <BottomNavigation className="content-list-data" showLabels>
                            <BottomNavigationButton label={list.stargazersCount} icon={< StarIcon/>} />
                            <BottomNavigationButton label={list.forksCount} icon={
                                <svg className="icon" aria-hidden="true" style={{ width:'24px', height: '24px'}}>
                                    <use xlinkHref="#icon-repo-forked1"></use>
                                </svg>
                            } />
                            <BottomNavigationButton label={list.openIssuesCount} icon={< ErrorIcon/>} />
                        </BottomNavigation>
                        <Button href={list.githubUrl} target="_blank" className="githubUrl">
                            <svg className="icon item-icon" aria-hidden="true">
                                <use xlinkHref="#icon-github"></use>
                            </svg>
                            <h4>查看{list.name}的Github</h4>
                        </Button>
                    </article>
                    <footer className="repo-footer">
                        <span className="createdAt repo-footer-item">
                            <AlarmAddIcon className="footer-icon"/>
                            <h4 className="footer-title">{formatTime(list.createdAt)}</h4>
                        </span>
                        <span className="updatedAt repo-footer-item">
                           <AlarmOnIcon className="footer-icon"/>
                           <h4 className="footer-title">{formatTime(list.updatedAt)}</h4> 
                        </span>
                    </footer>
                     <Snackbar className="snackbar"
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onRequestClose={this.handleRequestClose}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        autoHideDuration={3000}
                        message={
                            <span id="message-id">
                                <div className="content">{msg}</div>
                                <div className="content">{result}</div>
                            </span>
                        }
                    />
                </ListItem>
        )
    }
}
