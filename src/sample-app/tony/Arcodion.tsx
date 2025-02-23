import React from 'react';

/* what type value in javascript
- pritimive (kiểu nguyên thủy): number, string, boolean, null, undefiend, Sysmbol -> so sánh các giá trị
- non-pritimive: object, array, function .... -> so sánh vùng nhớ vs nhau

objA = {}; // memory A
objB = {}; // memory B
objC = objA // memory C

objA === objB -> false
objC === objA -> true

*/

function Arcodion() {
  const [arcodion, setArcodion] = React.useState([
    {
      id: 1, 
      title: 'CONSTRUCTION',
      content: 'CONSTRUCTION Lorem ipsum dolor sit amet, consectetur adipisicing elit,.',
      isOpen: false
    },
    {
      id: 2, 
      title: 'INTERNAL GAIN',
      content: 'INTERNAL GAIN Lorem ipsum dolor sit amet, consectetur adipisicing elit,.',
      isOpen: false
    },
    {
      id: 3, 
      title: 'AIRFLOW',
      content: 'AIRFLOW Lorem ipsum dolor sit amet, consectetur adipisicing elit,.',
      isOpen: false
    }
  ])
  
  function toggleArcodion(itemId: number) {
    const newArcodion = [...arcodion];
    const index = newArcodion.findIndex(acc => acc.id === itemId);
    if(index === -1) return;

    newArcodion[index].isOpen = !newArcodion[index].isOpen;
    setArcodion(newArcodion)
  }

  return (
    <div>
      <h1>Arcodion</h1>
      <div className="accordionFluent">
        {arcodion.map(item => (
          <div key={item.id} className="accordionItemFluent">
            <div className="accordionItemFluent-header" onClick={() => toggleArcodion(item.id)}>
              <h3 className="accordionItemFluent-title">{item.title}</h3>
            </div>
            <div className="accordionItemFluent-panel" style={{ display: item.isOpen ? 'block' : 'none' }}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Arcodion