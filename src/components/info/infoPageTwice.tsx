import React  from 'react'
import s from './infoTwice.module.scss'
import logo from "../../assets/img/logo.svg"
import baggage from "../../assets/img/baggage.svg"
import { pageData } from '../../interface/interfaces'
const InfoPageTwice:React.FC<pageData> = ({from,back,where,there}) => {
 
  return (
    <div className={s.wrapper}> 
    <div className={s.container}>
    <div className={s.half}>
        <div className={s.logo}>
            <h3 className={s.irrevocable}>
            Невозвратный
            </h3>
            <img src={logo} alt="logo" />
            <h3 className={s.logoName}>
            S7 Airlines
            </h3>
        </div>
        <div className={s.content}>
            <div className={s.infoTime}>
            <div className={s.info}>
                <h3 className={s.num}>
                22:57
                </h3> 
                <p className={s.locationDate}>
                {from} <br/> {there}
                </p>
               
            </div>
            <div className={s.time}>
                <div className={s.timeText}>
                SVO
                </div>
                <span className={s.timeSpend}>
                В пути 1 ч 55 мин
                </span>
                <div className={s.timeText}>
                ROV
                </div>
            </div>
            <div className={s.info}>
                <h3 className={s.num}>
                11:05
                </h3> 
                <p className={s.locationDate}>
                {where} <br/>{there}
                </p>
               
            </div>
            <img src={baggage} alt='багаж' className={s.baggage}></img>
            </div>
            
        </div></div>
        <div className={s.half}>
        <div className={s.logo}>
            <h3 className={s.irrevocable}>
            Невозвратный
            </h3>
            <img src={logo} alt="logo" />
            <h3 className={s.logoName}>
            S7 Airlines
            </h3>
        </div>
        <div className={s.content}>
            <div className={s.infoTime}>
            <div className={s.info}>
                <h3 className={s.num}>
                22:57
                </h3> 
                <p className={s.locationDate}>
                {where} <br/> {back}
                </p>
               
            </div>
            <div className={s.time}>
                <div className={s.timeText}>
                SVO
                </div>
                <span className={s.timeSpend}>
                В пути 1 ч 55 мин
                </span>
                <div className={s.timeText}>
                ROV
                </div>
            </div>
            <div className={s.info}>
                <h3 className={s.num}>
                11:05
                </h3> 
                <p className={s.locationDate}>
                {from} <br/>{back}
                </p>
               
            </div>
            <img src={baggage} alt='багаж' className={s.baggage}></img>
            </div>
            
        </div>
        </div>
       
        </div>
        <div className={s.cost}>
        9 300 ₽
        </div>
    </div>
    
  )
}
export default InfoPageTwice
