import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { BACK_ORIGIN } from './config'
console.log(BACK_ORIGIN)

function App() {
  const [count, setCount] = useState(0)
  const [apiRes,setApiRes] = useState("No response yet check console...")
  async function fetchData() {
    try {
      const res = await fetch(`${BACK_ORIGIN}/`);
      if(!res.ok) {
        throw Error("Wrong HTTP Request status code : "+res.status);
      }
      const body = await res.json();
      console.log(body)
      setApiRes(JSON.stringify(body))
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {fetchData()}, []);

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
      <h1>Démo front et back dockerisé ave compose</h1>
      <p>Dans le dossier back se trouve le fichier Dockerfile pour le backend rien de spécial a son sujet</p>
      <p>Dans le dossier front se trouve:</p>
      <ul>
        <li>Le fichier Dockerfile.dev pour l'envrionnement dev : concretement il lance le server test npm run dev sur le port 5173</li>
        <li>Le fichier Dockerfile.prod pour l'envrionnement production (server) : concretement il compile le code grâce à npm run build et le place dans un serveur apache httpd</li>
      </ul>
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
      <h3>{apiRes}</h3>
    </>
  )
}

export default App
