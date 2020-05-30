import React from 'react';
import photo_src from './imageInSrc.jpg'
import './style.css';
import videos from './myVideo.mp4';

function App() {
  return (
    <div className="App" >
   <div style={{border:'solid 1px black',maxWidth:'100vw'}}> 
 
 <h1 className="title red">Your name here</h1>  

     <br/>  

       <img src={photo_src} alt='image1' /> 
       
       <br/> 

          <img src="/imageInPublic.jpg" alt='image2'/>  
               
  <video width="320" height="240" controls>
      <source src={videos} type="video/mp4"/>
 </video>


   </div> 

    </div>
  );
}

export default App;
