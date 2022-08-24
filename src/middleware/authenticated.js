import { useEffect } from 'react'
import { authenticatedUser } from '../store'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'

function Authenticated(props) {
  const auth = useRecoilValue(authenticatedUser)
  const history = useNavigate()

  useEffect(() => {
    if (!auth.check) {
      history('/login')
    }
  })

  return props.children
}

export default Authenticated
