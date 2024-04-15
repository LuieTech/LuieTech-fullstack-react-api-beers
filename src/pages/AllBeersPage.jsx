import { useEffect, useState } from "react";
import beerService from "../../services/beer.service";
import { Link } from "react-router-dom";

function AllBeersPage() {

  const [allBeers, setAllBeers] = useState([])

  useEffect(() => {

    async function fetchBeers(){

      const beers = await beerService.allBeers()
      setAllBeers(beers)
      //console.log(beers)

    } 

    fetchBeers()

  }, [])

  return(

    <>
      {allBeers.map(beer => (
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
    </>

  )

}

export default AllBeersPage;
