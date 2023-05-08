import React from 'react'
import list from '../data';
import '../assets/images/styles/FoodItems.css';
import Cards from './Cards';
const FoodItems = ({handleClick}) => {
  return (
    <section>
        
        {
            list.map((item) => {
                return(
                    <Cards item={item} key={item.id} handleClick={handleClick}/>
                )
                
                })
        }
    </section>
  )
}

export default FoodItems