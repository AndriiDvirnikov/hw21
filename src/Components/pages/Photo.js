import React from 'react'

import { PageHeader } from '../PageHeader'

const PhotoPage = ()=>{
    return (
      <>
        <PageHeader>Photo Page</PageHeader>
        <div className="img_hold">
          <div className="box"><img src="https://via.placeholder.com/250"/></div>
          <div className="box"><img src="https://via.placeholder.com/250"/></div>
          <div className="box"><img src="https://via.placeholder.com/250"/></div>
          <div className="box"><img src="https://via.placeholder.com/250"/></div>
          <div className="box"><img src="https://via.placeholder.com/250"/></div>
          
        </div>
      </>
      )
  }
  export default PhotoPage