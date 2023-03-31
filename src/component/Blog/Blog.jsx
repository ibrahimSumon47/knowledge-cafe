import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts (data))
            
    }, [])
    console.log(products);
    return (
        <div>
            
        </div>
    );
};

export default Blog;