import React from 'react'
import { Link } from 'react-router-dom'
import { pageData } from '../../interface/interfaces'
import s from "./avia.module.scss"

interface aviaPageProps{
    setFrom:React.Dispatch<React.SetStateAction<string>>
    setWhere:React.Dispatch<React.SetStateAction<string>>
    setThere:React.Dispatch<React.SetStateAction<string>>
    setBack:React.Dispatch<React.SetStateAction<string>>
    from:string
    where:string
    there:string
    back:string
    isCorrect:boolean
    addCardToState: (item: pageData) => void
}

 const AviaPage:React.FC<aviaPageProps> = ({from,where, there,back, setFrom,setWhere,setThere,setBack,isCorrect,addCardToState}) => {
  return (
    <div className={s.wrapper}>
        <div className={s.searchForm}>
        <div className={s.inputBar}>
            <input value={from} className={s.input}  type="text" placeholder='Город вылета' onChange={(e) =>{
                    setFrom(e.target.value)
                }}/>
            <label className={s.label}>Откуда</label>
        </div>
        <div className={s.inputBar}>
            <input value={where} className={s.input} type="text" placeholder='Город прилёта' onChange={(e) =>{
                    setWhere(e.target.value)
                }}/>
            <label  className={s.label}>Куда</label>
        </div>
        <div className={s.inputBar }>
            <input value={there} className={there.length>0? `${s.inputDate__Active}` : `${s.inputDate}`} type="date" onChange={(el)=>{
                setThere(el.target.value)
            }}/>
            <span></span>
            <label className={s.label}>Туда</label>
        </div>
        
        <div className={s.inputBar}>
            
            <input value={back} className={back.length>0? `${s.inputDate__Active}` : `${s.inputDate}`} type="date" onChange={(el)=>{
                setBack(el.target.value)
            }}/>
            <label className={s.label}>Обратно</label>
        </div>
       
        </div>
        <div className={s.searchFooter}>
            <Link to="/avia/info">
                <button disabled={!isCorrect} onClick={()=>{
                     const item:pageData= {
                        from,
                        where,
                        there,
                        back
                      }
                    addCardToState(item)
                }}>Найти билеты</button>
            </Link>
        </div>
    </div>
  )
}

export default AviaPage
