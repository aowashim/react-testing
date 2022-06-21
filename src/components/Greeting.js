import React, { useState } from 'react'
import Output from './Output'

export default function Greeting() {
  const [changed, setChanged] = useState(false)

  return (
    <div>
      <h2>Hello World!</h2>
      {!changed && <Output>Good to see you.</Output>}
      {changed && <Output>Changed!</Output>}

      <button onClick={() => setChanged(true)}>Change</button>
    </div>
  )
}
