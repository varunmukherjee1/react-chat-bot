import React from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../store/store';

const MessageParser = ({ children, actions }) => {

    const dispatch = useDispatch();

  const parse = (message) => {
    dispatch(userActions.setName(message));
    actions.askAge();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;