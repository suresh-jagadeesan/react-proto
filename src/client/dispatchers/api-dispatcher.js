import {
    fetchUsers,
    fetchUsersSuccess,
    fetchUsersFailure
} from '../../client/actions';
import { FETCH_USERS_SUCCESS, FETCH_USERS } from '../actions/action-types';

export default async function(api, action) {
    switch(action.type) {
        case FETCH_USERS:
            try {
                const users = await axios.get(api);
                
                return fetchUsersSuccess(users);
            } catch(e) {
                return fetchUsersFailure();
            }
            break;
        default: 
            return {};
    }
}