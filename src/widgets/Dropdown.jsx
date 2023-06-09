import React from 'react'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { createClientMessage } from 'react-chatbot-kit'

import { userActions } from '../store/store'

const Dropdown = (props) => {

    const dispatch = useDispatch();
    const ageRef = useRef();

    const changeHandler = () => {
        const age = ageRef.current.value;

        const msg = createClientMessage(`${age}`)
        dispatch(userActions.setAge(age))

        props.setState((prev) => ({
            ...prev,
            messages: [...prev.messages,msg]
        }))

        props.actionProvider.end();
    }

    const opts = [];

    for (let i = 18; i <= 40; i++) {
        opts.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <div>
            <select ref = {ageRef} onChange = {changeHandler}>
                <option value="">-- Select Age --</option>
                {opts}
            </select>
        </div>
    )
}

export default Dropdown