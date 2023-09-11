import {RestaurantList} from '../Config';
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';

//Priority
//Unique-Key(Best Practice) > Index-Key(Ok Way. Use only if there's no key) > No-Key(Not Acceptable)
//map function is passing an object(restaurant) to take a JSX(RestaurantCard) as return
const Body = () => {
  //const searchText = 'KFC'; <====== JavaScript way
  const [searchInput, setSearchInput] = useState(); //local variable changes to local state variable as useState gives  
  //state to the local variable
  //There's no hard n fast rule for writing set before the function which we'll use to update the local state variable
  //but as per industry standard it's good.
    return (
    <>
    <div className='search-container'>
    <input
      type='text'
      className='search-input'
      placeholder='Search'   
      value={searchInput}
      onChange={(e)=>{
        setSearchInput(e.target.value); //e.target.value <===== Whatever we write in i/p
      }}/>
     </div>
     <button className='search-btn'>Search</button>
    <div className='Restaurant-List'>
      {RestaurantList.map((Restaurant) => {
         return <RestaurantCard {...Restaurant.data} key={Restaurant.data.id} />
           })}      
    </div>
    </>)
  };
export default Body;