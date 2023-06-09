import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userActions } from '../../store/store';

const Page3 = () => {

  const state = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exitHandler = () => {
    navigate("/")
    dispatch(userActions.reset())
  }

  return (
    <div>
      <p>{`Your name ${state.user.name} aged ${state.user.age} has been added to student system. You may now exit.`}</p>
      <button onClick = {exitHandler}>Exit</button>
    </div>
  )
}

export default Page3