import React, { Component } from 'react'
import GithubUser from './GithubUser'
import GithubOrg from './GithubOrg'
import {Container} from '../../styled'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'


export default class Github extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    _handleChange(e, value) {
        this.setState({
            value
        })
    }


    render() {
        const { value } = this.state

        return (
            <Container className="topPadding">
               <AppBar position="static" className="githubAppBar">
                    <Tabs value={value} onChange={this._handleChange.bind(this)}>
                        <Tab label="GithubUser" />
                        <Tab label="GithubOrg" />
                    </Tabs>
              </AppBar>
                {value === 0 && <GithubUser />}
                {value === 1 && <GithubOrg />}
            </Container>
        )
    }
}

