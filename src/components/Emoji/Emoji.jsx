import React from 'react'
import './emoji.css'

export default function Emoji({count,img}) {
    return (
        <div>
            <img className="emoji" src={img} alt='/'/>
            {count}
        </div>
    )
}
