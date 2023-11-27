import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import './index.scss'

const Accardion = ({accardionTitle,accardionContent}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div id='accardion'>
                <div className='accardion_title' onClick={handleClick}>
                    <h4>{accardionTitle}</h4>
                    {
                        isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />
                    }

                </div>

                <div className={` accardion_content ${isOpen ? 'active' : 'close'}`} >
                    {accardionContent}
                </div>
            </div>
        </>
    )
}

export default Accardion