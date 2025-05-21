import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('addItem', { detail: count }));
  }, [count]);

  return (
    <>
      <h1>MFE 3</h1>
      <div className="card">
        <button className='btn btn-warning' onClick={handleCount}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
