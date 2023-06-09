import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userActions } from '../../store/store';

import classes from "./page3.module.css"

const Page3 = () => {

  const state = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exitHandler = () => {
    navigate("/")
    dispatch(userActions.reset())
  }

  return (
    <div className = {classes.div}>
      <h1>Your name <span>{state.user.name}</span> aged <span>{state.user.age}</span> has been added to student system. You may now exit.</h1>
      <button onClick = {exitHandler}>Exit</button>
    </div>
  )
}

export default Page3