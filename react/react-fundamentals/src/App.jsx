import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import EmployeeCard from './components/EmployeeCard'
import UserProfile from './components/UserProfile' 

function App() {
  const name = "Prasanna"
  return(
    <>
      <Header />
      <Content />
      <EmployeeCard 
        name="Prasanna" 
        role="Full Stack" 
        experience={2}
        active={true}
      />

      <EmployeeCard
        name="Arun"
        role="Backend Developer"
        experience={3}
        active={false}
      />

      <UserProfile 
        name={"Karthi"}
        city={"Chennai"}
        company={"xyz"}
      />
      <Footer /> 

    </>
  )
  
}

export default App
