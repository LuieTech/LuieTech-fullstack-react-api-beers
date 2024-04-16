
const baseApiUrl = import.meta.env.VITE_REACT_APP_BASE_API_URL || ""

const allBeers = async () => {

  const response = await fetch(baseApiUrl)
  const beers = await response.json()

  return beers;

};

const beerDetails = async (beerId) => {

  const response = await fetch(`${baseApiUrl}/${beerId}`)
  const beer = await response.json()
  console.log("Beer from the service file" , beer)

  return beer;

} 

const randomBeer = async () => {

  const response = await fetch(`${baseApiUrl}/random`)
  const randomBeer = await response.json()

  return randomBeer;

}

const createBeer = async (data) => {

  const response = await fetch(`${baseApiUrl}/new`, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()

}

const newSearch = async (query) => {

  const search = await fetch(`${baseApiUrl}/search?q=${query}`)

  if(!search) throw new Error(`HTTP error! ${search.status}`)

  const response = await search.json()

  return response

}

export default {

  allBeers,
  beerDetails,
  randomBeer,
  createBeer,
  newSearch
}

// const list = async () => {

//   const response = await fetch(`${baseApiUrl}/task-groups`);
//   const groups = await response.json();

//   return groups;

// }

// export default {

//   list

// }