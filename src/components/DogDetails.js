
const Dogs = ({dog, updateDogs}) => {
if(!dog) return <h3>Select a doggo</h3>
    
const { id, name, image, isGoodDog} = dog

    const handleClick = () => {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              isGoodDog: !isGoodDog,
            }),
          })
        .then(res => res.json())
        .then(updateDogs)
    }



    return (
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            <img src={image}/>
            <h2>{name}</h2>
            <button onClick={handleClick}>{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
      </div>
    )
}
export default Dogs