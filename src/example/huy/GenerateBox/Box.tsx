import { useState } from "react";

interface BoxProps {
    box: number;
    index: string;
  }
function Box({box,index}:BoxProps) {
    const [bgColor, setBgColor]=useState('antiquewhite')
    const getRandomColor = () => {
        return `hsl(${Math.random() * 360}, 70%, 80%)`;
      };

    return (
        <div
              key={index}
              onClick={() => setBgColor(getRandomColor)}
              style={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: bgColor,
                cursor: "pointer",
              }}
            >
              Box #{Math.abs(box)}
            </div>
    );
}

export default Box;