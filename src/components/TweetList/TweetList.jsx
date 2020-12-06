import React from 'react';
import {connect} from 'react-redux';
import {
    deleteTweet
}from '../../actions/tweetAction';
import {
    SHOW_ALL
}from '../../actions/showAction';
import './TweetList.css';
import Resize from '../images/resize';

const TweetList = (props)=>{

    const tweetItems = props.tweets.map((tweet,id)=>{
        return(
            <li key ={id} className = "TweetList-item">
              <p>
                <p className = "text">{tweet.text}</p>
                <Resize/>
                <p className = "gabbage">{renderDeleteButton(props,tweet)}</p>
              </p>    
            </li>
        );      
    });
    return(
        <ul className = "list">
            {tweetItems}
        </ul>
    )
};




const renderDeleteButton = (props,tweet)=>{
    return(
        <button onClick={()=>{
            props.deleteTweet(tweet.id)
        }}>
            🗑
        </button>
    )
}

const mapStateToProps = (state)=>{
    let tweets;
    if(state.show === SHOW_ALL){
        tweets =[...state.tweets];
    }else{
        tweets =[...state.tweets];
    }
    return {tweets};
}

const mapDispatchToProps = {
    deleteTweet
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetList);
    
