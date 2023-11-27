import React, { useEffect, useState } from 'react';
import Accardion from '../Accardion';

const FilterByCategory = ({ handleCategoryFilter }) => {
    const categoryData = [
        { name: 'Dresses' },
        { name: 'Jackets' },
        { name: 'Jeans' },
        { name: 'Shoes' },
        { name: 'Bags' },
        { name: 'Jumpers' }
    ];

    const [category, setCategory] = useState([])

    const handleFilter = (categoryName, checked) => {
        if (checked) {
            setCategory([...category, categoryName]);
            console.log(categoryName);
        } else {
            setCategory(category.filter(name => name !== categoryName));
        }
    };

    useEffect(() => {
        console.log('Selected Categories:', category);
        handleCategoryFilter(category)
    }, [category])

    return (
        <div>
            <Accardion
                accardionTitle="Filter by Category"
                accardionContent={
                    <div>
                        {categoryData.map((category) => (
                            <label key={category.name} className="d-block">
                                <input
                                    className="my-2"
                                    type="checkbox"
                                    onChange={e => handleFilter(category.name, e.target.checked)}
                                />
                                {category.name}
                            </label>
                        ))}
                    </div>
                }
            />
        </div>
    );
};

export default FilterByCategory;
