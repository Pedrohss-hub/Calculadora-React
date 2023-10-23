import { useState } from 'react';
import './Calculator.css';

export default function App(){
  const [displayKey, setDisplayKey] = useState("")
  const [isOperator, setIsOperator] = useState(true)
  const [valueOfArray, setValueOfArray] = useState([])
  
  function Key(props){
    return(
      <button onClick={()=>{CurrentValue(props.children)}} className={`${props.className} keys`}>{props.children}</button>
    )
  }

  function CurrentValue(value){
    let type = null

    function pieaceMath (type, value){
      this.type = type,
      this.value = value
    }

    if(['/','*','-','+','%'].includes(value)){
      if(value == '-'){
        type = 'NegativeOperator'
      } else {
        type = 'Operator'
      }
    } else {
      type = 'Number'
    }
    const obj = new pieaceMath(type, value)
z
    if (valueOfArray[0] == null){
      setValueOfArray([...valueOfArray, obj])
    } else {

      if (valueOfArray[valueOfArray.length-1].type == obj.type && obj.type == 'Number'){
        console.log(obj.type) 
        let incrementValue = valueOfArray.slice()
        incrementValue[valueOfArray.length-1].value += value
        setValueOfArray(incrementValue)

      } else {
        setValueOfArray([...valueOfArray, obj])
      }

    }
  }

  const key = [{value:"(", class:'specialKey2'}, {value:")", class:'specialKey2'},  {value:"%", class:'specialKey2'}, {value:"AC", class:'specialKey'}, {value:"7"}, {value:"8"}, {value:"9"}, {value:"/"}, {value:"4"}, {value:"5"}, {value:"6"}, {value:"*"},{value:"1"}, {value:"2"}, {value:"3"}, {value:"-"}, {value:"."}, {value:"0"}, {value:"="},{value:"+"}]

  return(
    <div className='container-main'>
      <div className='display-box'>{valueOfArray.map((item) => item.value)}</div>
      <div className="keys-box">

        {key.map((element, index)=>{
          return(
            <Key key={index} className={element.class}>{element.value}</Key>
          )
        })}
        
        {/*console.log(isOperator)*/}
        {/*console.log(displayKey)*/}
        {console.log(valueOfArray.map((item) => item))}

      </div>
    </div>
  )
}
