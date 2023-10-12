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
    switch (value){

      case '=':
        let mathExpression = displayKey;
        for(let i = 0; i < mathExpression.length; i++){
          if(mathExpression[i] == "%"){
            mathExpression[i-1] = `${mathExpression[i-1]}/100`
            mathExpression[i] = "*"
          }
        }
        mathExpression = mathExpression.join('')
        mathExpression = eval(mathExpression)
        mathExpression = (mathExpression.toString()).split('')
        setDisplayKey(mathExpression);
      break;

      case 'AC':
        if(displayKey.length > 1){
          let deleteLastValue = [...displayKey]
          deleteLastValue.pop()
          setDisplayKey(deleteLastValue)
        } else {
          setDisplayKey([])
        }

        console.log('foi')
      break;

      default:
        setDisplayKey(displayKey => [...displayKey, value]);
      break;
    }
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
        {console.log(displayKey)}

      </div>
    </div>
  )
}
