import * as Constants from '../actions/constants';

export default function (state = [], action ) {

    switch (action.type){
        case Constants.ADD_ERROR:
            return [...state, action.msg];

        case Constants.CLEAR_ERROR:
            return [];
    }

    return state;
}