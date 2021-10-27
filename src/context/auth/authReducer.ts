import { Usuario } from '../../interfaces/appInterfaces'

export interface IAuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated'
  token: string | null
  errorMessage: string
  user: Usuario | null
}

type AuthAction =
  | { type: 'signUp'; payload: { token: string; user: Usuario } }
  | { type: 'addError'; payload: string }
  | { type: 'removeError' }
  | { type: 'notAuthenticated' }
  | { type: 'logout' }

export const authReducer = (
  state: IAuthState,
  action: AuthAction
): IAuthState => {
  switch (action.type) {
    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user
      }
    case 'addError':
      return {
        ...state,
        errorMessage: action.payload,
        user: null,
        status: 'not-authenticated',
        token: null
      }
    case 'removeError':
      return {
        ...state,
        errorMessage: ''
      }
    case 'notAuthenticated':
    case 'logout':
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        user: null
      }
    default:
      return state
  }
}
