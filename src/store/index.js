import { atom } from 'recoil'

const authenticatedUser = atom({
  key: 'authenticatedUser',
  default: {
    check: false,
    user: {
      name: ' Habib Ritonga',
    },
  },
})

export { authenticatedUser }
