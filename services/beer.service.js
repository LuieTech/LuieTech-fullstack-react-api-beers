
const baseApiUrl = import.meta.env.VITE_REACT_APP_BASE_API_URL || ""

const allBeers = async () => {

  const response = await fetch(baseApiUrl)
  const beers = await response.json()

  return beers;

};

const beerDetails = async (beerId) => {

  const response = await fetch(`${baseApiUrl}/${beerId}`)
  const beer = await response.json()
  //console.log("Beer from the service file" , beer)

  return beer;

} 

export default {

  allBeers,
  beerDetails

}

// const list = async () => {

//   const response = await fetch(`${baseApiUrl}/task-groups`);
//   const groups = await response.json();

//   return groups;

// }

// export default {

//   list

// }