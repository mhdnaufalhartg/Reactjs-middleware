import React from 'react'
import Navbar from '../../components/navbar'
import Guest from '../../middleware/guest'

function Register(props) {
  return (
    <div>
      <Guest>
        <div>
          <Navbar />
          <div className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">Register Page</div>
              </div>
            </div>
          </div>
        </div>
      </Guest>
    </div>
  )
}

export default Register
