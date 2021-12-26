import React from 'react'
import Store from './imgArr'
import './card.css'

const Card=({imgIndex})=> {
    function imagesMapping(data){  
        let imgUrl= data.filter((img,index)=>{
            if(index===imgIndex)
            return img.imageUrl;  
        })
        return imgUrl[0].imageUrl   
    }
    return (
        <div  >
           <img className="image" src={ imagesMapping(Store)}alt='/'></img>
           <h2>{ imagesMapping(Store).title }</h2>
        </div>
    )
}

export default Card