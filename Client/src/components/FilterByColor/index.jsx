import React, { useEffect, useState } from 'react'
import Accardion from '../Accardion';
import './index.scss'
const FilterByColor = ({handleColorFilter}) => {
    const colorData = [
        { name: '#B6724' },
        { name: '#D3AD3B' },
        { name: '#84795F' },
        { name: '#6B8898' },
        { name: '#D8C2A7' },
        { name: '#DE6320' },
        { name: '#955641' },
        { name: '#362D32' }
    ];

    const [color, setColor] = useState([])

    const handleFilter = (colorName, checked) => {
        if (checked) {
            setColor([...color, colorName]);
        } else {
            setColor(color.filter(name => name !== colorName));
        }
    };

    useEffect(() => {
        handleColorFilter(color)
    }, [color])

  return (
    <div>
           <Accardion
        accardionTitle="Filter by Color"
        accardionContent={
          <div className="d-flex">
            {colorData.map((color) => (
              <div key={color.name} style={{backgroundColor:color.name,width:"30px" ,height:"30px"}} className="d-flex justify-content-center align-items-center">
                <input
                  className="my-2"
                  type="checkbox"
                  onChange={(e) => handleFilter(color.name, e.target.checked)}
                />
              </div>
            ))}
          </div>
        }
      />
    </div>
  )
}

export default FilterByColor