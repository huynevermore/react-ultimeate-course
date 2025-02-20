import { useState } from "react";
import Box from "./Box";

export default function GenerateBox() {
  const [numBoxes, setNumBoxes] = useState(0);
  const [boxes, setBoxes] = useState<number[]>([]);

  const handleGenerate = () => {
    if (numBoxes > 128) return;
    if(numBoxes===0){
        setBoxes([])
        return;
    }
    setBoxes([...Array(numBoxes)].map((_, i) => i + 1));
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
        <h1>GenerateBox: Huy</h1>
      <label>
        Number of boxes:
        <input
          type="number"
          value={numBoxes}
          onChange={(e) => setNumBoxes(Math.max(0, Math.min(128, +e.target.value)))}
          style={{ margin: "0 10px", width: 60 }}
        />
      </label>
      <button onClick={handleGenerate}>Generate</button>

      <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
        {boxes.length > 0 ? (
            boxes.map((box, index) => (
              <Box box={box} index={`box-${index}`} />
            ))
        ) : (
            <p>No box</p>
        )}
      </div>
    </div>
  );
}
