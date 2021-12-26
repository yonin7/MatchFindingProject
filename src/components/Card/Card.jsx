import React from 'react'
import Store from './imgArr'
import './card.css'

const Card=({imgIndex})=> {
    function imagesMapping(data){  
        let imgUrl= ''
        data.forEach((img,index)=>{
            if(index===imgIndex)
            imgUrl=img;  
        })
        return imgUrl


    }
    return (
        <div  >
           <img className="image" src={ imagesMapping(Store).imageUrl}alt='/'></img>
           <h2>{ imagesMapping(Store).title }</h2>
        </div>
    )
}

export default Card