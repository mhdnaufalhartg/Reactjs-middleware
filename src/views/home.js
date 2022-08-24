import React from 'react'
import Navbar from '../components/navbar'

function Home(props) {
  return (
    <div>
      <Navbar />
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">Home Page</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
