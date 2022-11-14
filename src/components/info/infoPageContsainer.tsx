import React from 'react'
import { useSelector } from 'react-redux'
import {pageData} from "../../interface/interfaces"
import { RootState } from '../../store/store'
import InfoPageOne from './infoPageOne'
import InfoPageTwice from './infoPageTwice'

const InfoPageContsainer:React.FC = () => {
  
  const cardData:pageData = useSelector((state:RootState)=> state.card.card)

  return (
    <>
    {cardData.back.length>0?<InfoPageTwice from={cardData.from} back={cardData.back} where={cardData.where} there={cardData.there}/>:<InfoPageOne where={cardData.where} there={cardData.there} from={cardData.from}/>}
    
    
    </>
  
  )
}
export default InfoPageContsainer
