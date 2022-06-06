
import { Link } from 'react-router-dom'

import React from 'react'

function Food({image, title,  link}) {
  return (

    
      <div className="card col-sm-3 col-md-6 col-lg-6 m-4 " style={{width:"18rem"}}>
          <img src={image} className="card-img-top" alt="newImage"/>
              <div className="card-body">
                  <h5 className="card-title" style={{textAlign: "center"}}>{title}</h5>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <Link to={link}>
                    <button type='button' className="btn btn-outline-primary">Explore</button>
                    </Link>
                  </div>
                  
              </div>
      </div>
   
  )
}

export default Food