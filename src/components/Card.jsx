import {FaEllipsisH} from 'react-icons/fa'
import { useRef, useState } from 'react'

import '../styles/styles.css'
import '../styles/tablet.css'
import '../styles/desktop.css'

function Card({acao,horas,ultimasHoras,periodo,background,icon}){
    
    const [visible,setVisible] = useState(false)
    const cardSpanRef = useRef()
    function changeVisible(e){
        if(visible){
            cardSpanRef.current.style.display = 'none'
            setVisible(false)
        }else{
            cardSpanRef.current.style.display = 'block'
            setVisible(true)
        }
    }

    return (

        <div className='gridItem' style={     
        {backgroundColor: `${background}`} }>
            <span className='cardSpan' style={{color: `${background}`, border: `1px solid ${background}`, boxShadow: `2px 4px 10px ${background}`}} ref={cardSpanRef}>CARD - {acao}</span>
            <img className='icon' src={icon}></img>
            
            <div className='insideContainer'>   

                <div className='threePoints'>
                    <p>{acao}</p>
                  
                    <FaEllipsisH id='points' onClick={changeVisible}/>
                </div>

                <div className='time'>
                <h2>{horas}hrs</h2>
                <p>Last {periodo} - {ultimasHoras}hrs</p>
                </div>
            </div>
        </div>

    )
}

export default Card