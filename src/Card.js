import React from "react";
import './Card.css'
import Home from './Home'
import FindMore from './Filter'




// const AIRBNBS="https://frozen-spire-09426.herokuapp.com/airbnbs"

function Card({ img, title, description, price }) {
    // const [airbnbs, setAirbnbs] = useState([])

    // const airbnbFetcher = () => {
    //     fetch(AIRBNBS)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setAirbnbs(data)
    //             // console.log(data)
    //         })
//     }

//     useEffect(
//         airbnbFetcher, []
//     )
// let home = airbnbs.map((airbnb) => (<Home img={airbnb.img} description={airbnb.description} price={airbnb.price} key={airbnb.id}/>))    
    return (
              <div className="col">
        <div className='card' style={{width: 18 + 'rem'}}>
            
            <img src={img} alt="" />
            <div className="card-body"></div>
            <div className="card__info">
                <h3>{title}</h3>
                <h4>{description}</h4>
                <h4>{price}</h4>

            </div>
        </div>
        </div>
    
    )
}

export default Card