import React from 'react'
// @ts-ignore
import img from '../images/test.png'
import '../css/test.css'

const MainContainer = () => {

    return (
        <div>
            Hello, React<br/>
            <img src={img}/>
        </div>
    )
}

export default MainContainer