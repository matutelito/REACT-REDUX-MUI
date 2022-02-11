import { useMemo, useState } from "react";


const rellenar= () => {
  let arr= [];
  for(var i= 0; i<100; i++){
    arr.push(i)
  }
  console.log(arr)
  return arr
};


const MyComponent = () => {

  const [state, setState] = useState(0);

  const handleChange= (e) => {
    let value= e.target.value;
    setState(value)
  };
  
  const dataMemo= 'x';
  const myArray= useMemo(() => rellenar(dataMemo), [dataMemo])  

  return(
    <>
      <input 
        type="number" 
        value={state} 
        onChange={handleChange}
      >
      </input>
        {
          myArray.filter( number =>
            <p style={{'display': 'inline'}}>{number}</p>
          )
        }
    </>
  )
};

export default MyComponent;