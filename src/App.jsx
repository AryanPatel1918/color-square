import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("")

  return (
    <>
      <div class="square" style={{ backgroundColor: color }}>
        <span>{color}</span>
      </div>
      
      <label>
        <input
          id="input-el"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="Enter a color"
        />
      </label>
    </>
  )
}
