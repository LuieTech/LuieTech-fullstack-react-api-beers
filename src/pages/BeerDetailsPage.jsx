import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import beerService from "../../services/beer.service";

function BeerDetailsPage() {

  const { beerId } = useParams()
  const [beer, setBeer] = useState([])

  useEffect(() => {

    async function fetchBeer(){

      const beer = await beerService.beerDetails(beerId)
      setBeer(beer)
      console.log(beer)
    }

    fetchBeer()

  }, [])

  return (
      <div className="d-flex justify-content-center">
         <div className=" m-5 p-5" style={{width:"50%"}}>
          <div className="d-flex justify-content-center">
            <img src={beer.image_url} className="card-img-top mb-5" style={{width:"6rem"}} alt="..." />
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <h2 className="card-title">{beer.name}</h2>
              <h3 className="text-secondary">{beer.attenuation_level}</h3>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h4 className="text-secondary">{beer.tagline}</h4>
              <span className="fw-bold">{beer.first_brewed}</span>
            </div>
            <p className="card-text mb-4">{beer.description}</p>
            <p className="card-text"><small className="text-muted">{beer.contributed_by}</small></p>
          </div>
        </div>
      </div>
       

    )
}

export default BeerDetailsPage;
