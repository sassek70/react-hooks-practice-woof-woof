import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogDetails from './DogDetails'
import ToggleFilter from "./Filter";


function App() {
  const [dogsArray, setDogsArray] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(false)
  const [isGoodDog, setIsGoodDog] = useState(null)

  const selectedDog = dogsArray.find((dog) => dog.id === selectedDogId)

  
  useEffect(()=>{
    fetch(`http://localhost:3001/pups`)
    .then(res => res.json())
    .then(dogArray => setDogsArray(dogArray))
  }, [])
  
// const handleFetch = (dogArray) => {
//   setDogsArray((dogsArray) => {
//     dogsArray = dogArray
//   })
// }
console.log(dogsArray)
console.log(selectedDogId)

  const updateDogs = (updatedDog) => {
    const updatedDogs = dogsArray.map((dog) => dog.id === updatedDog.id ? updatedDog : dog)
  setDogsArray(updatedDogs)
  }

const handleToggle = () => {
  setIsGoodDog((isGoodDog) => !isGoodDog)}

  let displayDogs = dogsArray;
  if(isGoodDog){
    displayDogs = displayDogs.filter((dog) => dog.isGoodDog)
  }

  return (
    <div className="App">
      <ToggleFilter isGoodDog={isGoodDog} toggleGoodDogs={handleToggle}/>
      <DogBar dogsArray={displayDogs} setSelectedDogId={setSelectedDogId}/>
      <DogDetails dog={selectedDog} updateDogs={updateDogs}/>
    </div>
  );
}

export default App;
