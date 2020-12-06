import React from 'react';
import Button from '../Button/Button';
import './Home.css';
import Icon from './wisky.jpg';
import Icon2 from './journey.jpg'
import Icon3 from './muscle.jpg'

const Home = ({history})=>{
    return(
        <div className = 'Home-container'>
            <div className = 'header'>
                <h1>旅ingLIFE</h1>
                <p>自分の体験を記録に残す</p>
            </div>
            <div className = 'wisky'>
                <h2>ウイスキー</h2>
                <img className = 'wisky-image'　src = {Icon} alt = ''></img>
                <p>aaaaaaaaaaaaaaaaa</p>
                <Button className = 'wisky-button' onClickHandler = {()=>{history.push('/tweet')}}>
                        記録する
                </Button>
            </div>
            <div className = 'journey'>
                <h2>旅</h2>
                <img className = 'journey-image' src = {Icon2} alt = ''></img>
                <p>bbbbbbbbbbb</p>
                <Button onClickHandler = {()=>{history.push('/tweet')}}>
                     記録する
                </Button>
            </div>
            <div className = 'muscle'>
                <h2>筋トレ</h2>
                <img className = 'muscle-image' src = {Icon3} alt = ''></img> 
                <p>ccccccccccccc</p>
                <Button onClickHandler = {()=>{history.push('/tweet')}}>
                    記録する
                </Button>
            </div>
        </div>
    )
}

export default Home;