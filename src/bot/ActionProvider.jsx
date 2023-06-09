import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const askAge = () => {
        const msg = createChatBotMessage("Enter Your Age :",{
            widget: 'ageList'
        })

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages,msg]
        }))

    }

    const askName = () => {
        const msg = createChatBotMessage("Enter Your Name :")

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages,msg]
        }))
    }

    const end = () => {
        const msg = createChatBotMessage("Thank You !")

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages,msg]
        }))
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