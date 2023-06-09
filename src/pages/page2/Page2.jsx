import React from 'react'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '../../bot/config';
import ActionProvider from '../../bot/ActionProvider';
import MessageParser from '../../bot/MessageParser';

import classes from "./page2.module.css"

const Page2 = () => {
  return (
    <div className = {classes.div}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default Page2