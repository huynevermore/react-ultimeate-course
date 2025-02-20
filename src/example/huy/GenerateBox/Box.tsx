import { useState } from "react";
import { randomColor } from '../../../utils/randomColor';

interface BoxProps {
    box: number;
    index: string;
  }
function Box({box,index}:BoxProps) {
    const [bgColor, setBgColor]=useState('antiquewhite')

    return (
        <div
              key={index}
              onClick={() => setBgColor(randomColor())}
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