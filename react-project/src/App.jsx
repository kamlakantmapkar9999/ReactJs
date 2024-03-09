import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CORE_CONCEPTS } from './data.js'


const randomText = ['10','12','14'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [count, setCount] = useState(5)
  const randomTextValue = randomText[genRandomInt(2)];

  return (
    <>
      <Header/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {randomTextValue}
      </p>

      <section id="core-concepts">
        <ul>
        <Component {...CORE_CONCEPTS[0]} />
        <Component {...CORE_CONCEPTS[1]} />
        <Component {...CORE_CONCEPTS[2]} />
        <Component {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
    </>
  )
}

function Component({title, description}) {
  return (
    <li>
      <img src={reactLogo} />
      <p>{title}</p>
      <p>{description}</p>
    </li>
  )
}

function Header() {
  return (
    <><div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div><h1>Vite + React</h1></>
  );
}

export default App
