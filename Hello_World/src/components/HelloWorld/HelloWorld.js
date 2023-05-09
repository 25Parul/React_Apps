import React from 'react'
import './HelloWorld.css'

function HelloWorld() {
    console.log('HelloWorld component is rerendered')

  return (
    <div >
        <div className='helloWorldDiv'>Hello World! 
        </div>
        <p>
            hi
            I am Parul. It's so nice to meet you :)
        </p>
    </div>

  )
}

export default HelloWorld