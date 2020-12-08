import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addTweet} from '../../actions/tweetAction';
import './Tweet.css';
import TweetList from '../TweetList/TweetList';
import Icon from '../images/image/wiskyimg.jpg';
import Icon1 from '../images/image/wisky2.jpg';
import Icon2 from '../images/image/journeyimg.jpg';
import Icon3 from '../images/image/meatimg.jpg';

const Tweet =(props)=>{
    const [text,setText] = useState('');
    const onChangeHandler = (event)=>{
        setText(event.target.value);
    }

    const onClickButton =()=>{
        if(text){
            props.addTweet(text);
            setText('');
        }
    };
    return(
        <div>
            <div className = "center">
                <h1>体験記録</h1>
            </div>
            <div className = "tweet-container">
                <div className = "left-container">
                    <h3>過去の体験</h3>
                    <div className = "osake">
                        <img src = {Icon} alt = ""></img>
                        <h5>chivas-regal</h5>
                        <p>芳醇でスモーキーな味わいがクセになる一品です。<br/>¥2500</p>
                    </div>
                    <div className = "osake">
                        <img src = {Icon1} alt = ""></img>
                        <h5>macallan</h5>
                        <p>芳醇でスモーキーな味わいがクセになる一品です。<br/>¥2500</p>
                    </div>
                    <div className = "trip">
                        <img src = {Icon2} alt = ""></img>
                        <h5>paris</h5>
                        <p>フランスには東京タワーみたいな塔があって、みんなエッフェル塔と呼んでいたよ！</p>
                    </div>   
                    <div className = "meat">
                        <img src = {Icon3} alt = ""></img>
                        <h5>proteins</h5>
                        <p>腹筋・腕立て・スクワットをした後のタンパク質はたまらないぜ〜！</p>
                    </div>         
                </div>    
                <div className = "right-container">
                    <h1>新体験を共有しよう！</h1>
                    <input className = "form-input" value = {text} type = "text"　placeholder = "(例)ウイスキー：白州飲んだ〜！美味しかった！" onChange={onChangeHandler}></input>
                    <button className = "button-input" onClick ={onClickButton}>投稿する</button>
                    <TweetList/>
                </div>
            </div>    
            <div className = "center bottom">
                
                <hr/><Link to = '/'>記事一覧に戻る</Link>
            </div>
        </div>    
    )
}

const mapDispatchToProps = { addTweet };

export default connect(
  null,
  mapDispatchToProps
)(Tweet);