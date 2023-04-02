import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"


export default function MainPage() {
    const dispatch = useDispatch()
    const {num} = useSelector(state => state) 
    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')


    const increment = () => {
        dispatch({
            type: 'INCREMENT',
            payload: +firstNum + +secondNum
        })

       setFirstNum('')
       setSecondNum('')

       if(firstNum === '' || secondNum === ''){
        return alert('Заполните все поля!')
    }
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT',
            payload: +firstNum - +secondNum
        })

        setFirstNum('')
        setSecondNum('')

        if(firstNum === '' || secondNum === ''){
            return alert('Заполните все поля!')
        }
    }

    const multiply = () => {
        dispatch({
            type: 'MULTIPLY',
            payload: +firstNum * +secondNum
        })
        setFirstNum('')
        setSecondNum('')
        if(firstNum === '' || secondNum === ''){
            return alert('Заполните все поля!')
        
        }
    }

    const division = () => {
        dispatch({ 
            type: 'DIVISION',
            payload: +firstNum / +secondNum
        })

        setFirstNum('')
        setSecondNum('')

        if(firstNum === '' || secondNum === ''){
            return alert('Заполните все поля!')
        }
    }
    

  return (
    <div>
        <h1>{num}</h1>
        <input 
            value={firstNum}
            type="text" 
            placeholder="firstNum" 
            onChange={(event) => {setFirstNum(event.target.value)}}/>
        <input 
            value={secondNum}
            type="text" 
            placeholder="seconNum"
            onChange={(event) => {setSecondNum(event.target.value)}}
            />
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={division}>/</button>
        </div>
    </div>
  )
}
