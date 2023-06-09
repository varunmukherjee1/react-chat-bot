import { createChatBotMessage } from 'react-chatbot-kit';

import InputButton from '../widgets/InputButton';
import Dropdown from '../widgets/Dropdown';

const config = {
    initialMessages: [
        createChatBotMessage(`Hello, Welcome to student info system!`,
        {
            widget: 'gotIt'
        }),
    ],
    widgets: [
        {
            widgetName: 'gotIt',
            widgetFunc: (props) => <InputButton {...props}/>
        },
        {
            widgetName: 'ageList',
            widgetFunc: (props) => <Dropdown {...props}/>
        },
    ]
};

export default config;