import { UserState } from '.';
import { Action, UserActions } from './user.action';

const initialState: UserState = {
    loaded: false,
    loading: false,
    users: []
}

export const userReducer: (state: UserState, action: Action) => UserState = (
    state = initialState, 
    action
    ) => {
    switch(action.type) {
        case UserActions.LOAD_USERS:
            return {...state, loaded: false, loading: true};
        case UserActions.LOAD_USERS_SUCCESS:
        return {...state, users: action.payload, loaded: true, loading: false};
        default:
            return state;
    }
}



