import { UserActions, UserActionTypes } from '../actions/user.actions';
import { Job } from '../../job.interface';

export const userFeatureKey = 'user';

export interface UserState {
    id: number;
    name: string;
    jobs: Job[];
}

export const initialState: UserState = {
    id: undefined,
    name: undefined,
    jobs: [],
};

export function reducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.LoadUsers:
            return state;

        default:
            return state;
    }
}
