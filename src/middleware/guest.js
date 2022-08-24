import { useEffect } from 'react'
import { authenticatedUser } from '../store'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'

function Guest(props) {
  const auth = useRecoilValue(authenticatedUser)
  const history = useNavigate()

  useEffect(() => {
    if (auth.check) {
      history('/Dashboard')
    }
  })

  return props.children
}

export default Guest
