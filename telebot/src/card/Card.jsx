import React, { useState } from 'react'
import './card.css'
import Button from './button'
export default function Card(props) {
    const [count, setCount] = useState(0)
    const { course, onAddItem, onRemoveItem } = props

    const handleIncrement = () => {
        setCount(prev => prev + 1)
        onAddItem(course)
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1)
        onRemoveItem(course)
    }
    return (

        <div className='card'>
            <span
                className={`${count !== 0 ? 'card_badge' : "card_badge-hidden"}`}
            >{count}</span>
            <div className='img_container'>
                <img src={course.Image} alt={course.title}
                    width={'400px'} height={'230px'} />
            </div>
            <div className='card_body'>
                <h1 className='card_title'>{course.title}</h1>
                <div className='card_price'>
                    {course.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    }
                    )}

                </div>
            </div>
            <div className='hr'></div>


            <div className='btn_container'>
                <Button title={'+'} onClick={handleIncrement} type={"add"} />
                {count !== 0 && (
                    <Button title={'-'} onClick={handleDecrement} type={"remove"} />
                )
                }

            </div>
        </div>
    )
}
