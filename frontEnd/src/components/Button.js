import React from 'react'

const Button = ({color,text,onClick,disabled,id}) => {
    
    return (
        <button onClick ={onClick} id={id} style={{backgroundColor: color,fontWeight: 'bold'}} disabled={disabled} className='btn'>{text}</button>
    )
}

export default Button
