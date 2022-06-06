import FoodItem from '../components/FoodItem.js/FoodItem'

import NorthIndianFood  from '../assets/corn.jpg'

import React, { Fragment } from 'react'

function Food() {
  return (
    
            <Fragment>

               <div className="container p-5">

                 <div className="row p-5 justify-content-evenly">

                <FoodItem image={NorthIndianFood} title ="North Indian Cuisine" link=''/>
                <FoodItem image={NorthIndianFood} title ="East Indian Cuisine" link=''/>
                <FoodItem image={NorthIndianFood} title ="South Indian Cuisine" link=''/>
                <FoodItem image={NorthIndianFood} title ="West Indian Cuisine" link=''/>

                </div>

                </div>

            </Fragment>

  )
}

export default Food

