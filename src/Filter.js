
import React,{useState,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card'


const AIRBNBS="https://frozen-spire-09426.herokuapp.com/airbnbs"

function Filter({airbnbs,setAirbnbs}) {
    const [searchItem, setSearchItem]= useState("")
    const airbnbFetcher = () => {
        fetch(AIRBNBS)
            .then((response) => response.json())
            .then((data) => {
                setAirbnbs(data)
                //console.log(data)
            })
    }

    useEffect(
        airbnbFetcher, []
    )

    function handleChange(e){
        console.log(e.target.value)
        setSearchItem(e.target.value)
    }
    const searchFilter =airbnbs.filter((airbnb) => {
        if(searchItem === ""){
            return airbnb
        }else if(airbnb.title.toLowerCase().includes(searchItem.toLowerCase())){
            return airbnb}
        }).map((airbnb) => (<Card img={airbnb.img}title={airbnb.title}description={airbnb.description} price={airbnb.price} key={airbnb.id}/>))

  return (
    <div>


<div className="header_center">
<input type="text" onChange={handleChange}placeholder="Type here "/> 
<SearchIcon/>
{searchFilter}
</div>

    </div>
  )
}

export default Filter