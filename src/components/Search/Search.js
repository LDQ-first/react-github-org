import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui-icons/search'
import SearchSection from '../../styled/search'

export default class SearchCom extends Component {
     static get propTypes() { 
        return { 
            label: PropTypes.string ,
            placeholder: PropTypes.string,
            helperText: PropTypes.string,
            ariaLabel: PropTypes.string,
            _this: PropTypes.object.isRequired
        }
    }


    render() {
        const {label, placeholder, helperText, ariaLabel, _this} = this.props

        return (
            <SearchSection>
                <TextField 
                    className = "search-input"  
                    label = {label}
                    InputProps = {{ placeholder: placeholder }}
                    helperText = {helperText}
                    margin = "normal"
                    onKeyDown = {(e) => {_this._keySearch(e)}}
                    inputRef ={ search => _this._search = search }
                />
                <span className="search-icon">  
                    <IconButton color="primary" aria-label={ariaLabel}>
                        <Search onClick = {() => {_this._iconSearch()}}/>
                    </IconButton>
                </span>   
            </SearchSection>

        )
    }
}

