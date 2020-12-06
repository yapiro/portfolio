export const ADD_TWEET = 'ADD_TWEET';
export const DELETE_TWEET = 'DELETE_TWEET';


export const addTweet = (text)=>{
    return{
        type:ADD_TWEET,
        text
    }
}
export const deleteTweet = (id)=>{
    return{
        type:DELETE_TWEET,
        id
    }
}

