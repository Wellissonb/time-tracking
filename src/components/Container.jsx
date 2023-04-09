import '../styles/styles.css'
import '../styles/tablet.css'
import '../styles/desktop.css'

import Profile from './Profile'


function Container(props){
  function submit(e){
    props.send(e)
  }
    return (    
      <section className='gridContainer'>
        <Profile handleWitch={submit} buttonColor1={props.corButton1} buttonColor2={props.corButton2} buttonColor3={props.corButton3}/>
        {props.children}
      </section>
    )   
}

export default Container