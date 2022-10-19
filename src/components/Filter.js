


const ToggleFilter = ({isGoodDog, toggleGoodDogs}) => {
    return(
        <div id="filter-div">
            <button id="good-dog-filter" onClick={toggleGoodDogs}>Filter good dogs: {isGoodDog ? "ON" : "OFF"}</button>
        </div>
    )
}

export default ToggleFilter