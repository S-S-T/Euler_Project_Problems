import React from 'react'
import {partial} from '../../lib/utils'
import PropTypes from 'prop-types'
import { Tapable } from 'tapable';

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id)  // () => props.handleToggle(props.id)
    return (
        <li>
            <input type="checkbox" onChange={handleToggle}
            checked={props.isComplete} /> {props.name}
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


    // hash Tapable
    // Array
    // linkedList
    // Tree (orderd)  red/black
    // balanced/ordered trees