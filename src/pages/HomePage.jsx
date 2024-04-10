import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
// console.log(beers)


function HomePage() {

  return <div className="">

    <section className="flex-container m-5 ">
      <div className="mb-3 border" style={{width:"500px"}}>
        <div>
          <img src={beers} style={{width: "500px"}} alt="all-beers-img" />
        </div>
        <div className="p-4">
          <Link to={'/beers'} > All Beers </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur blanditiis ut sit dolor voluptas eveniet voluptates? Unde est nam nulla voluptatum sequi, corrupti aut harum beatae? Reiciendis, tenetur quibusdam?</p>
        </div>
        
      </div> 

      <div className="mb-3 border" style={{width:"500px"}}>
        <div>
          <img src={randomBeer} style={{width: "500px"}} alt="random-beer-img" />
        </div>
        <div className="p-4">
          <Link to={'/random-beer'} > Random beer </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur blanditiis ut sit dolor voluptas eveniet voluptates? Unde est nam nulla voluptatum sequi, corrupti aut harum beatae? Reiciendis, tenetur quibusdam?</p>
        </div>
      </div>

      <div className="mb-3 border" style={{width:"500px"}}>
        <div>
          <img src={newBeer} style={{width: "500px"}} alt="" />
        </div>
        <div className="p-4">
          <Link to={'/new-beer'} > Add Beer </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur blanditiis ut sit dolor voluptas eveniet voluptates? Unde est nam nulla voluptatum sequi, corrupti aut harum beatae? Reiciendis, tenetur quibusdam?</p>
        </div>

      </div>
    </section>
  </div>
}

export default HomePage;
