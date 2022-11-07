import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext} from './useWorkoutContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDisptach } = useWorkoutsContext()

    const logout = () => {
        //  remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDisptach({type: 'SET_WORKOUTS', payload: null})
    }

    return { logout }
}