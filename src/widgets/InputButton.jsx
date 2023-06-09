import React from 'react'
import { createClientMessage } from 'react-chatbot-kit';

import classes from "./widgets.module.css"

const InputButton = (props) => {

    const clickHandler = () => {
        const msg = createClientMessage("Got It!")

        props.setState((prev) => ({
            ...prev,
            messages: [...prev.messages,msg]
        }))

        props.actionProvider.askName();
    }

    return (
        <div className = {classes.buttonDiv}>
            <button onClick = {clickHandler}>Got It!</button>
        </div>
    )
}

export default InputButton