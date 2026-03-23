// import { useState } from 'react'
import { Provaider } from 'react-redux';

// import { BrowserRouter } from 'react-router'
import './App.css'
import Task from './components/Task'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h3>Задание</h3>
      <Provaider>
        <Task />
      </Provaider>
    </>
  )
}

export default App


// import './App.css';
// import { BrowserRouter } from 'react-router'
// import NavigationMenu from './components/task1/NavigationMenu';

// function App() {

//   return (
//     <>
//       <h3>Задание №1 - Навигационное меню</h3>
//       <BrowserRouter>
//         <NavigationMenu />
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
