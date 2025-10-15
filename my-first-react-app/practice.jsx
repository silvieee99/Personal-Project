import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Components name must start with capital letter; you can use components multiple timess to avoid repetition. Also how to add inline  styles
const Card = ({title}) => { 
  const[count, setCount] = useState(0) //to track the number of clicks on the movie to recommend similar ones  
  const[hasLiked, setHasLiked] = useState(false);
  useEffect(()=>{
    console.log(`${title} has been liked : ${hasLiked}`);
  },[hasLiked])
  return(<div className='card' onClick={()=>setCount(count + 1)}> {/*we want card to increase by 1 whenever soemone clicks on the card*/} 
    <h2>{title} <br /> {count || null }</h2> {/*count || null only displays count on the screen when you click on liked*/} 
    <button onClick={()=>setHasLiked(!hasLiked)}>
      {hasLiked? 'liked🤍':'like❤️'} 
    </button>
  </div>
  )
  
}

const app1 = () => {
  return(<div className='card-container'>
  <h1>FUNCTIONAL ARROW COMPONENT</h1>
   <Card title ="Star Wars"/>
   <Card title ="Avatar"/>
   <Card title ="Lion King"/>
  </div>
 
  )
}

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

export default app1
