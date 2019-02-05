import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = (props) => {
    return (
        <li>
            <input type="checkbox" defaultChecked={props.isComplete} /> {props.name}
        </li>
        )
    }
    // set propTypes here. Must import Proptypes from React then can turncate the paths
    // isRequired makes sure the prop gets passed correctly; remember upper and lower case areas
    TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.string.isRequired
    }