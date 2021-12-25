import React from 'react'
import './emoji.css'

export default function Emoji({count,img}) {
    return (
        <div>
            <img src={img} alt='/'/>
            {count}
        </div>
    )
}
