import React from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/store'
import { useNavigate } from 'react-router-dom'

import classes from "./page1.module.css"

const Page1 = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(userActions.next())
    navigate("/p1")
  }

  return (
    <div className = {classes.div}>
      <h1>Enter Into Student Info. System</h1>
      <button onClick = {clickHandler}>Enroll Now !</button>
    </div>
  )
}

export default Page1