import React,{useEffect} from 'react';
import { Route, Routes,useLocation,useNavigate } from 'react-router-dom';
import AviaPageContainer from './components/avia/aviaPageContainer';
import Error from './components/error';
import InfoPageContsainer from './components/info/infoPageContsainer';





const App:React.FC=() => {
  //стартовая страница = /avia
  const nav =useNavigate()
  const loc = useLocation()
   useEffect(()=>{
    if(loc.pathname==="/"){
      nav("/avia")
    }
   },)
  return (
    <>
    <Routes>
    
      <Route path='*' element={<Error/>}/>
      <Route path='/avia' element={<AviaPageContainer/>} />
      <Route path='/avia/info' element={ <InfoPageContsainer />} />
   
    </Routes>
</>
  )
}

export default App;
