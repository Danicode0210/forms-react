import { useState } from "react";

const Cat = () => {

const [cat, setCat] = useState({
    name:'Rodolfo',
    year: 5
})


const handleClick = () => {

    setCat({...cat,year: cat.year +1})
    console.log('me diste click')
}


    return (
        <>
        <h2>{cat.name} - {cat.year}</h2>
        <button onClick={handleClick} className="btn btn-dark mb-2">Update Year</button>
        </>
    )
};

export default Cat;