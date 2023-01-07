import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import './styles/Header.css'

const Header = () => {

  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch(setNameTrainerGlobal(''))
  }

  return (
    <header className='header'>
      <img className='header_img' src="/images/Pokedex.png" alt="" />
    <div className='header_black'>
        <div className='header_circle'>
            <div className='header_circle-int'></div>
            <i onClick={handleClickLogout} className='header_logout bx bx-log-out'></i>
        </div>
    </div>
    </header>
  )
}

export default Header
