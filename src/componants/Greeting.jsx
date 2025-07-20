import React from 'react'

const Greeting = ({timeOfDay}) => {

   return timeOfDay == "night" ? (
   <h1>Good Night!</h1>
 ) : (
   <h1>Good Morning</h1>
 )

}

export default Greeting