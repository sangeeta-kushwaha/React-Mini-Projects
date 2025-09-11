
import { useState,useEffect,useCallback,useRef } from 'react'
import "./PasswordGenerator.css"

function PasswordGenerator() {

  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] =useState(false)
  const [password,setPassword] = useState("") 



const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+=~`"

    for(let i=1;i<= length;i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
      console.log(pass)
    }
    setPassword(pass)

  },[numberAllowed,charAllowed,length,setPassword])


  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  




  return (
   <div className='container' >
    <h1>Password Generator</h1>
    <div className='flex'>
      <input type="text"
      value={password}
      id='inputbox'
      placeholder='Password'
      readOnly
      ref={passwordRef}
       />
       <button  onClick ={copyPasswordToClipBoard}className='copybtn'>Copy</button>
    </div>

    <div className='handleInputs'>
      <div className='flex'>
        <input type="range"  
     value={length} 
     min={6}
     max={100}
     style={{cursor:"pointer"}}
     onChange={(e)=> {setLength(e.target.value)}}/>
        <label >Length:{length}</label>
      </div>
       <div className='flex'>
        <input type="checkbox" 
        defaultChecked={numberAllowed}
        onChange={()=>{setNumberAllowed((prev) =>!prev)}}/>
        <label htmlFor="">Number</label>
      </div>
       <div className='flex'>
        <input type="checkbox" 
        defaultChecked ={charAllowed}
        onChange={()=>{setCharAllowed((prev) => !prev)}}/>
        <label >Character</label>
      </div>

    </div>
   </div>
  )
}

export default PasswordGenerator
