
import React, { useState } from 'react'
import "./HideAndSeek.css"

const MyApp = () =>{
    const [showText, setShowtext] = useState("")
    const [hideDisplay, setHideDisplay] =useState ("Seek... ?")
    const [showImage, setShowImage] = useState(false)


const handleClick = () => {
    setShowtext(!showText)
    setHideDisplay(hideDisplay === "Seek... ?" ? "Hide!": "Seek... ?")
    setShowImage(!showImage);
}


const text = <p>I am constantly fascinated by the beauty and complexity of marine life. 
    Varieties of fishes, reefs, corals, and turtles swimming in the vast ocean reminds me of the intricate interconnectedness of all living creatures in our planet's waters. <br/>
<br/>
<b>Looking closely, do you see the vibrant colors and textures of the coral reefs?</b><br/>
<br/>
They provide a crucial habitat for many species of fish and other marine organisms. The schools of small fish darting between the coral formations create a mesmerizing dance, while the majestic turtle glides effortlessly through the water, its movements graceful and serene.
</p>


const image=  <img src="https://assets.thehansindia.com/h-upload/2021/12/05/1125167-deep-ocean-mission.jpg" 
alt="Ocean life" />

const HideAndSeek = () => {
  return (
    <div>
        <h1>The Beauty and Complexity of Marine Life!</h1>
        <div id="content">
            {showImage && image}
        <p> {showText && text}</p>
        <button onClick = {handleClick}> {hideDisplay} </button>
        </div>
        
    </div>
  )
}
return  <HideAndSeek />

}

export default MyApp
