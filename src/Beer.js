import React, { useState } from 'react'
import './beer.css'

const Beer = (props) => {
    console.log(props.beer);
    const {name, abv, ibu, description, image_url}= props.beer
    const [ishidden, setIshidden] = useState(true)
    const handleclick = () => {
        setIshidden(!ishidden)
        console.log(ishidden)
    }
    return (

<div>

        {ishidden
        ?<div className='myDiv'>
            <h1>
                {name}
            </h1>
            <img onClick= {handleclick} src= {image_url} style={{height:"200px"}}/>
        </div>
        :<div className='myDiv'>
            <h1>
                {name}
            </h1>
            <img onClick= {handleclick} src= {image_url} style={{height:"200px"}}/>
            <p> abv:{abv}|ibu:{ibu}</p>
            <p>{description}</p>
        </div>
    }
    </div>
        

    )
}

export default Beer
