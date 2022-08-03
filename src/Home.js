import React,{useState,useEffect}  from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import Filter from './Filter'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

// ES7 snippets to do 'rfce'
const AIRBNBS="https://frozen-spire-09426.herokuapp.com/airbnbs"
function Home({airbnbs,setAirbnbs}) {
    const [searchItem, setSearchItem]= useState("")

    function handleChange(e){
        console.log(e.target.value)
        setSearchItem(e.target.value)
    }

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

    // let card = airbnbs.map((airbnb) => (Card image={airbnb.img} description={airbnb.description} price={airbnb.price} key={airbnb.id}/>))    
// let cards = airbnbs.map((airbnb) => (<Card img={airbnb.img}title={airbnb.title}description={airbnb.description} price={airbnb.price} key={airbnb.id}/>))    
const searchFilter =airbnbs.filter((airbnb) => {
    if(searchItem === ""){
        return airbnb
    }else if(airbnb.title.toLowerCase().includes(searchItem.toLowerCase())){
        return airbnb}
    }).map((airbnb) => (<Card img={airbnb.img}title={airbnb.title}description={airbnb.description} price={airbnb.price} key={airbnb.id}/>))

return (
        <div >
            <Banner />
            <br/>
            <br/>
            <br/>
<div className='header_center'>
<input type="text" onChange={handleChange}placeholder="Type here to search " style={{
    width: '100%',
    alignItems: 'center',
        margin: '0 auto',
        maxWidth: 800
      }}/> 
<SearchIcon/>

</div>
            {/* <Filter airbnbs={airbnbs} setAirbnbs = {setAirbnbs}/> */}
            <div className='home__section'>
          <div className='row'>{searchFilter}</div>
                
            </div>
        </div>
    )
}

export default Home