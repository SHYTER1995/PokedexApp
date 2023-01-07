import React from 'react'
import FormHome from '../components/FormHome'
import './styles/Home.css'



const Home = () => {
return (
<main className='home'>
    <img className='home_img' src="/images/Pokedex.png" alt="" />
    <h2 className='home_subtitle'>Hi, trainer!</h2>
    <p className='home_text'>Give me your name to get started!</p>
    <FormHome/>
</main>
)
}

export default Home
