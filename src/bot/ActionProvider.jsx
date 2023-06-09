import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const navigate = useNavigate();

    const askAge = () => {
        const msg = createChatBotMessage("Enter Your Age :",{
            widget: 'ageList',
            delay: 500
        })

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages,msg]
        }))

    }

    const askName = () => {
        const msg = createChatBotMessage("Enter Your Name :",{
            delay: 500
        })

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages,msg]
        }))
    }

    const end = () => {
        const msg = createChatBotMessage("Thank You !",{
            delay: 500
        })
        const msg1 = createChatBotMessage("Thank you. In 5 seconds, bot will exit",{
            withAvatar: false,
            delay: 800
        })

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages,msg,msg1]
        }))

        let count = 0;
        const interval = setInterval(() => {
            count++;

            const temp = createChatBotMessage(`${5-count}...`,{
                withAvatar: false,
            }) 

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages,temp]
            }))

            if (count === 5) {
                clearInterval(interval);
                navigate("/p2")
            }
        }, 1000);
    }    

    return (
        <div>
            {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                actions: {
                    askAge,
                    askName,
                    end
                },
            });
            })}
        </div>
    );
};

export default ActionProvider;