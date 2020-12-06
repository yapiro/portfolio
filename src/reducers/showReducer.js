import {
    SHOW_ALL
}from '../actions/showAction';

export const showReducer = (state = [],action)=>{
    switch(action.type){
        case SHOW_ALL:
            return SHOW_ALL
        default:
            return state;           
    }
}