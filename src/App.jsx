import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("yellow")

  return (
    <>
      <div class="square" style={{ backgroundColor: color }}>
        <span>{color}</span>
      </div>
      <input id="input-el" onChange={(e) => setColor(e.target.value)} type="text" />
    </>
  )
}
