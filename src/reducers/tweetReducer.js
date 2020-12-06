import {
    ADD_TWEET,
    DELETE_TWEET,
}from '../actions/tweetAction';
import Tweet from '../models/Tweet';

export const tweetReducer = (state = [],action)=>{
    switch(action.type){
        case ADD_TWEET:
            const tweet = new Tweet(action.text)
            return [
                ...state,
                tweet,
            ];
        case DELETE_TWEET:
            return state.filter((tweet,id)=>{
                return action.id !== tweet.id;
            });    
        default:
            return state;    
    }
}