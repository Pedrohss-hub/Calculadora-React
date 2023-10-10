import { useState } from 'react';
import './Calculator.css';

export default function App(){
  const [displayKey, setDisplayKey] = useState("")
  
  function Key(props){
    return(
      <button onClick={()=>{CurrentValue(props.children)}} className={`${props.className} keys`}>{props.children}</button>
    )
  }

  function CurrentValue(value){
    console.log(displayKey) 
    setDisplayKey(displayKey => [...displayKey, value])
    console.log(displayKey)
  }

  //Array of Keys
  const key = [{value:"(", class:'specialKey2'}, {value:")", class:'specialKey2'},  {value:"%", class:'specialKey2'}, {value:"AC", class:'specialKey'}, {value:"7"}, {value:"8"}, {value:"9"}, {value:"/"}, {value:"4"}, {value:"5"}, {value:"6"}, {value:"*"},{value:"1"}, {value:"2"}, {value:"3"}, {value:"-"}, {value:"."}, {value:"0"}, {value:"="},{value:"+"}]

  return(
    <div className='container-main'>
      <div className='display-box'>{displayKey}</div>
      <div className="keys-box">

        {key.map((element, index)=>{
          return(
            <Key key={index} className={element.class}>{element.value}</Key>
          )
        })}

      </div>
    </div>
  )
}
