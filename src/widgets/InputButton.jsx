import React from 'react'
import { createClientMessage } from 'react-chatbot-kit';

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
        <div>
            <button onClick = {clickHandler}>Got It!</button>
        </div>
    )
}

export default InputButton