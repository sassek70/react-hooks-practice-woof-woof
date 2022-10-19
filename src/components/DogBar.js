import Dogs from "./DogDetails"


const DogBar = ({dogsArray, setSelectedDogId}) => {


const dogArray = dogsArray.map((dog) => {
    return <span key={dog.id} onClick={() => setSelectedDogId(dog.id)}>{dog.name}</span>
})
        

    return (
        <div id="dog-bar">
        {dogArray}
        </div>
    )
}

export default DogBar