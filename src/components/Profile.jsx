import ProfilePhoto from './img/image-jeremy.png'
import '../styles/styles.css'
import '../styles/tablet.css'
import '../styles/desktop.css'


function Profile({handleWitch,buttonColor1,buttonColor2,buttonColor3}){


    function setType(e){
        e.preventDefault()
        handleWitch(e.target.innerHTML)
    }

    return(
        <div className='profile'>

            <div className='jeremy'>
                <img src={ProfilePhoto} />
                <div>
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
                </div>
            </div>


        <div className='buttonContainer'>
        <button onClick={setType} style={{color: `${buttonColor1}`}}>Daily</button>
        <button  onClick={setType} style={{color: `${buttonColor2}`}} >Weekly</button>
        <button  onClick={setType} style={{color: `${buttonColor3}`}}>Monthly</button>
        </div>  
        
        </div>
    )
}

export default Profile
