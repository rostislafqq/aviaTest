import React ,{useState} from 'react'
import s from './info.module.scss'
import logo from "../../assets/img/logo.svg"
import baggage from "../../assets/img/baggage.svg"

interface InfoPageOneProps{
    from:string
    where:string
    there:string
}

const InfoPageOne:React.FC<InfoPageOneProps> = ({from,where,there}) => {
    //оживление кнопок времени
    const time =[[
        '09:20',
        '11:05'
    ],
    [
        '10:20',
        '12:05'
    ],
    [
        '11:20',
        '13:05'
    ],
    ]
    const [chosen,setChosen] = useState(0)
  
  return (
    <div className={s.wrapper}> 
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
                    {time[chosen][0]}
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
                {time[chosen][1]}
                </h3> 
                <p className={s.locationDate}>
                {where} <br/>{there}
                </p>
               
            </div>
            <img src={baggage} alt='багаж' className={s.baggage}></img>
            </div>
            <div className={s.buttons}>
                {time.map((val , i) => <button  key={i} 
                className={chosen === i ? s.button + " " + s.button__active : s.button}
                 onClick={()=>{
                    setChosen(i)
                }}>
                 {val[0]} <span>- {val[1]}</span>
                 </button>)}
            </div>
        </div>
        <div className={s.cost}>
            <h3>4 150 ₽</h3>
        </div>
    </div>
  )
}
export default InfoPageOne
