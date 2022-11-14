import {useEffect, useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import s from "./error.module.scss"

 const Error = () => {
    const [num,setNum] = useState(3)
    const navigate = useNavigate()
    useEffect(()=>{
        
        if(num===0){
            return navigate("/avia");
        }
        
        setTimeout(()=>{
            setNum(num-1)
        },1000)
    },[num,navigate])
  return (
    <>
    <h1 className={s.body}>
        Внимание ! Здесь ничего нет 😒😒😒! Перехожу на <Link to={"/avia"}>главную страницу</Link> через : {num}  
        
    </h1>
    </>
  )
}

export default Error