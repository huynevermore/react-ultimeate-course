import React from 'react'

/*
step1:
  - render 4 box with state array (red, yellow, aqua, purple)

step 2:
 - change color when user click box

step 3:
 - reset default color when user toggle box
*/

function ColorBox() {
  //state
  const [color, setColor] = React.useState<string | null>(null);
  const [colorBoxs, setColorBoxs] = React.useState([
    { id: 1, title: 'red', bgColor: 'red' },
    { id: 1, title: 'yellow', bgColor: 'yellow' },
    { id: 1, title: 'aqua', bgColor: 'aqua' },
    { id: 1, title: 'purple', bgColor: 'purple' }
  ]);

  // actions
  const toggleClickColor = (bgColor: string) => {
    if (bgColor === color) {
      setColor(null);
      return;
    }

    setColor(bgColor)
  }

  // UI
  return (
    <div>
      <h1>ColorBox</h1>
      Current Color: {color || 'Default'}
      <div
        style={{
          display: 'flex'
        }}
      >
        {colorBoxs.map(box => (
          <div 
            key={box.id} 
            style={{
              cursor: 'pointer', 
              backgroundColor: color || box.bgColor,
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => toggleClickColor(box.bgColor)}
          >
            {box.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorBox