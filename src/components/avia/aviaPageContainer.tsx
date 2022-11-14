import React, { useState ,useEffect ,useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { pageData } from '../../interface/interfaces'
import { addCardItem } from '../../store/Slices/cardSlice'
import AviaPage from './aviaPage'


 const AviaPageContainer:React.FC = () => {
    //inputsValue
    const [from,setFrom] = useState('') //откуда
    const [where,setWhere] = useState('') //куда
    const [there,setThere] = useState('') //туда
    const [back,setBack] = useState('') //обратно

    //disabled button
    const [isCorrect,setIsCorrect] = useState(false)
    useEffect(() => {
        if(from.length>0 && where.length>0 && there.length>0  ){
            setIsCorrect(true)
            
        }
        else{
            setIsCorrect(false)
        }
    }, [from,where,there])
    
    //функция диспатча в редакс
    const dispatch = useDispatch()
    
    const addCardToState = useCallback((item:pageData)=>{
   
      dispatch(addCardItem(item))
     
    },[dispatch])
    
   
  return (
    <AviaPage from={from} setFrom={setFrom} where={where} there={there} back={back} setWhere={setWhere} setThere={setThere} setBack={setBack} isCorrect={isCorrect} addCardToState={addCardToState}/>
  )
}

export default AviaPageContainer
