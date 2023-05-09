import React, { useEffect, useState } from 'react'

const ColorChanger = () => {
    const[backgroundColor, setBackgroundColor] = useState("white");

    useEffect(
        () => {
            changeBody()
        }, [backgroundColor]
    )

    useEffect(() => {
        console.log('color has changed')
    }, [backgroundColor]);


    const changeBackgroundColor =() =>{
        const newColor = generateRandomColor();
        setBackgroundColor(newColor)
    }

    const generateRandomColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
        const random = Math.floor(Math.random()*colors.length) ;
        return colors[random]                                                                                                                                                                                                                                        
    }

    const changeBody = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.background = backgroundColor;
    }

    return (
        <div>
          <button onClick={changeBackgroundColor}>Change Color</button>
        </div>
      );
    };

export default ColorChanger