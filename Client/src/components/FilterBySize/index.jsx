import React, { useEffect, useState } from 'react'
import Accardion from '../Accardion';

const FilterBySize = ({ handleSizeFilter }) => {
    const sizeData = [
        { name: 'XS' },
        { name: 'S' },
        { name: 'M' },
        { name: 'L' },
        { name: 'XL' },
        { name: 'XXL' }
    ];

    const [size, setSize] = useState([])

    const handleFilter = (sizeName, checked) => {
        if (checked) {
            setSize([...size, sizeName]);
        } else {
            setSize(size.filter(name => name !== sizeName));
        }
    };

    useEffect(() => {
        handleSizeFilter(size)
    }, [size])
    return (
        <div>
            <Accardion
                accardionTitle="Filter by Size"
                accardionContent={
                    <div>
                        {sizeData.map((size) => (
                            <label key={size.name} className="d-block">
                                <input
                                    type="checkbox"
                                    onChange={e => handleFilter(size.name, e.target.checked)}
                                />
                                {size.name}
                            </label>
                        ))}
                    </div>
                }
            />
        </div>
    )
}

export default FilterBySize