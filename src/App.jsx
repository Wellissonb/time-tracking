import { icons } from "./components/icons";
import Container from './components/Container'
import Card from './components/Card'
import { useState } from "react";
import data from './data/data.json'
function App() {

  const [type,setType] = useState('Weekly')

  function select(value){
    setType(value)
  }

  return (
    <>
     {
       type === 'Daily' && <Container send={select} corButton1={'white'}>
        {
         data.map((dado,indice)=>(
          <Card acao={dado.title} horas={dado.timeframes.daily.current} ultimasHoras={dado.timeframes.daily.previous} periodo={'Day'} background={icons[indice].bg} icon={icons[indice].icon} key={indice}/>
         ))
        }
        </Container>
     }
       {
       type === 'Weekly' && <Container send={select} corButton2={'white'}>
        {
         data.map((dado,indice)=>(
          <Card acao={dado.title} horas={dado.timeframes.weekly.current} ultimasHoras={dado.timeframes.weekly.previous} periodo={'Week'} background={icons[indice].bg} icon={icons[indice].icon} key={indice}/>
         ))
        }
        </Container>
     }
       {
       type === 'Monthly' && <Container send={select} corButton3={'white'}>
        {
         data.map((dado,indice)=>(
          <Card acao={dado.title} horas={dado.timeframes.monthly.current} ultimasHoras={dado.timeframes.monthly.previous} periodo={'Month'} background={icons[indice].bg} icon={icons[indice].icon} key={indice}/>
         ))
        }
        </Container>
     }

    </>
  );
}

export default App;
