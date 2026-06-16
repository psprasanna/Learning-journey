import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import EmployeeCard from './components/EmployeeCard'
import UserProfile from './components/UserProfile' 
import TechnologyCard from './components/TechnologyCard'
import ProjectCard from './components/ProjectCard'
import CounterExample from './components/CounterExample'
import EmployeeStatus from './components/EmployeeStatus'
import FormsExample from './components/FormsExample'
import EmployeeForm from './components/EmployeeForm'
import Users from './components/Users'
import EmployeeDirectory from './components/EmployeeDirectory'
import EmpForm from './components/EmpForm'

import Home from './pages/Home'
import Employees from './pages/Employees'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

//Components 
// function App() {
//   const name = "Prasanna"
//   const employees = [
//       {
//           id: 1,
//           name: "Prasanna",
//           role: "Full Stack Developer",
//           experience:2,
//           active: true
//       },
//       {
//           id: 2,
//           name: "Arun",
//           role: "Backend Developer",
//           experience:4,
//           active: true
//       },
//       {
//           id: 3,
//           name: "Karthik",
//           role: "Frontend Developer",
//           experience:1,
//           active: true
//       }
//   ];
//   const projects = [
//     {
//         id: 1,
//         name: "Todo App",
//         status: "Completed"
//     },
//     {
//         id: 2,
//         name: "Employee Management",
//         status: "In Progress"
//     }
//   ];
//   // return(
//   //   <>
//   //     <Header />
//   //     <Content />
//   //     {/* <EmployeeCard 
//   //       name="Prasanna" 
//   //       role="Full Stack" 
//   //       experience={2}
//   //       active={true}
//   //     />

//   //     <EmployeeCard
//   //       name="Arun"
//   //       role="Backend Developer"
//   //       experience={3}
//   //       active={false}
//   //     /> */}
//   //     {/* Rendering multiple employees by using map */}
//   //     {/* {
//   //       employees.map(employee =>{
//   //         return <EmployeeCard 
//   //             key={employee.id}
//   //             name = {employee.name} 
//   //             role = {employee.role}
//   //             experience={employee.experience}
//   //             active={employee.active}
//   //           />
//   //       })
//   //     } */}
//   //     <div>
//   //       {
//   //         employees.map(employee =>(
//   //           <EmployeeCard 
//   //             key={employee.id}
//   //             name={employee.name}
//   //             role={employee.role}
//   //             experience={employee.experience}
//   //             active={employee.active}
//   //           />
//   //         ))
//   //       }
//   //     </div>

//   //     <TechnologyCard />

//   //     <div>
//   //       {
//   //         projects.map( project => (
//   //           <ProjectCard 
//   //             key={project.id}
//   //             name={project.name}
//   //             status={project.status}
//   //           />
//   //         ))
//   //       }
//   //     </div>


//   //     <UserProfile 
//   //       name={"Karthi"}
//   //       city={"Chennai"}
//   //       company={"xyz"}
//   //     />
//   //     <Footer /> 

//   //   </>
//   // )

//   return (
//     <>
//       {/* <CounterExample /> */}
//       {/* <EmployeeStatus />
//       <FormsExample />
//       <EmployeeForm />
//       <Users /> */}
//       <EmployeeDirectory />
//     </>
//   )

  
  
// }

//Routes
function App(){
  return (
    <BrowserRouter>
      <Navbar />      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/employees' element={<Employees/>} />
      </Routes>
    
    </BrowserRouter>
  )
}
export default App
