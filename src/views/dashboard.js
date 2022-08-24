import React from 'react'
import Navbar from '../components/navbar'
import Authenticated from '../middleware/authenticated'

function Dashboard(props) {
  return (
    <div>
      <Authenticated>
        <div>
          <Navbar />
          <div className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">Dashboard Page</div>
              </div>
            </div>
          </div>
        </div>
      </Authenticated>
    </div>
  )
}

export default Dashboard
