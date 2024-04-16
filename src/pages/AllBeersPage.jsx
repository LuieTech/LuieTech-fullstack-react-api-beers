import { useEffect, useState } from "react";
import beerService from "../../services/beer.service";
import { Link, useNavigate } from "react-router-dom";


function AllBeersPage() {

  const [beers, setBeers] = useState([])
  
  const navigate = useNavigate()

  useEffect(() => {

    async function fetchBeers(){

      const beers = await beerService.allBeers()
      setBeers(beers)
      //console.log(beers)

    } 

    fetchBeers()

  }, [])

  const handleOnChange = async (event) => {

    const {value} = event.target
    // console.log("This is the event from onChange: ", value)
    const searchResult = await beerService.newSearch(value);
    console.log(searchResult)
    setBeers(searchResult)

  }

  return(

    <>
      <div className="d-flex align-items-center m-5 gap-2">
        <label htmlFor="beerSearch">search:</label>
        <input 
          type="text" 
          id="beerSearch" 
          placeholder="beer name?"
          className="form-control"
          onChange={handleOnChange}  
        />
      </div>
        
      {beers.map(beer => (
        <Link to={`/beers/${beer._id}`} key={beer._id} className="text-decoration-none text-dark">
          <div  className="d-flex border m-5 p-4 gap-5" style={{width:"1000px"}}>
            <div> 
              <img src={beer.image_url} alt="beer-img" style={{width:"110px", height:"280px"}}/>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h1 className="mb-4">{beer.name}</h1>
              <h4 className="text-muted">{beer.tagline}</h4>
              <p className="">
                Created by: 
                <span className="underline-none"> {beer.contributed_by}</span>
              </p>
            </div>
          </div>
        </Link>

      ))} 
      <div className="d-flex flex-column align-items-center gap-4  m-5">
        <Link className="btn btn-primary" to={`/new-beer`} >Create new beer</Link>
        <button onClick={() => navigate('/new-beer')} >Button to Create new Beer with useNavigate</button>
      </div>
    </>

  )

}

export default AllBeersPage;
