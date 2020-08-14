import React, { useState } from 'react'
function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <header className="App-header" onClick={() => setCount(count + 1)}>
        {count}
      </header>
    </div>
  )
}

export default App
