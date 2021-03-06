import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { ConnectedRouter } from 'react-router-redux'

import Bundle from './bundle'
import Loading from '../components/Loading/Loading'


import NotFound from 'bundle-loader?lazy&name=notFound!../views/NotFound/NotFound'
import Github from 'bundle-loader?lazy&name=github!../views/Github/Github'



import NavMenu from './nav'


import createHistory from 'history/createHashHistory'


import {github} from './link.js'

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
)

let open = false


const getRouter = () => (
    <ConnectedRouter history={createHistory()}>  
        <div>
            <NavMenu></NavMenu>  
            <Switch>             
                <Route path='/' component={createComponent(Github)}/>
                <Route component={createComponent(NotFound)}/>
            </Switch>
        </div>
         
    </ConnectedRouter>
)
export default getRouter
