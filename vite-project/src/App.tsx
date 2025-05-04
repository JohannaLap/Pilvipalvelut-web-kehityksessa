import { useState, useCallback, useEffect } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginForm from './LoginForm' ;


function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    console.log(`Nappia klikattiin: X=${event.pageX}, Y=${event.pageY}`)
    setCount((prev) => prev + 1)
  }, [])

  useEffect(() => {
    console.log('Viesti')
  }, [])

  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start' });
  
    const d = document,
          g = d.createElement('script'),
          s: HTMLScriptElement = d.getElementsByTagName('script')[0];
  
    g.async = true;
    g.src = 'https://pilvipalvelut-matomo.2.rahtiapp.fi/js/container_oxlFyC9j.js'; 
  
    if (s && s.parentNode) {
      s.parentNode.insertBefore(g, s);
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Jossun websovellus</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <div>
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default App
