import React from 'react';
import Button from '../Button/Button';
import './Home.css';
import Icon from './wisky.jpg';
import Icon2 from './journey.jpg';
import Icon3 from './muscle.jpg';
import Icon4 from './wiskyblog.jpg';
import Icon5 from './muscle-blog1.jpg';
import Icon6 from './journey-blog1.jpg';
import Icon7 from './jpnwisky-blog1.jpg';
import {Link} from 'react-router-dom';

const Home = ({history})=>{
    return(
        <div className = 'Home-container'>
            <div className = 'header-lists'>
                <h1>男のロマン</h1>
                <h3>お酒・旅・筋肉。<br/>３拍子揃った男は人生を楽しめる。<br/>そんな男になるために私がしていることを更新中</h3>
            </div>
            <div className = "all-cardtype">
                <div className = "top-cardtype">
                    <article className = 'cardtype'>
                        <Link to = "/wisky-blog1221" className = 'cardtype-link'>
                            <div className = 'cardtype-img'>
                                <img className = 'blog' src = {Icon4} alt = ''></img>
                            </div>  
                            <div className = 'cardtype-text'>
                                <h4>安くてお手軽？！2020年に飲むべきウイスキー３選</h4>
                            </div> 
                        </Link>
                    </article>
                    <article className = 'cardtype'>
                        <Link to ="/muscle-blog1221" className = 'cardtype-link'>
                            <div className = 'cardtype-img'>
                                <img className = 'blog' src = {Icon5} alt = ''></img>
                            </div>  
                            <div className = 'cardtype-text'>
                                <h4>ホエイプロテインのコスパがすごい！</h4>
                            </div> 
                        </Link>
                    </article>
                </div>
                <div className = "bottom-cardtype">
                    <article className = 'cardtype'>
                        <Link to = "/journey-blog" className = 'cardtype-link'>
                            <div className = 'cardtype-img'>
                                <img className = 'blog' src = {Icon6} alt = ''></img>
                            </div>  
                            <div className = 'cardtype-text'>
                                <h4>行ってよかった場所をお伝えします！[トルコ編]</h4>
                            </div> 
                        </Link>
                    </article>
                    <article className = 'cardtype'>
                        <Link to = "/wisky-blog1221part2" className = 'cardtype-link'>
                            <div className = 'cardtype-img'>
                                <img className = 'blog' src = {Icon7} alt = ''></img>
                            </div>  
                            <div className = 'cardtype-text'>
                                <h4>ジャパニーズウイスキーの銘柄紹介</h4>
                            </div> 
                        </Link>
                    </article>
                </div>    
            </div>
            <div className = 'header'>
                <h1>旅ingLIFE's note</h1>
                <p>自分の体験を記録に残す</p>
            </div>
            <div className = 'wisky'>
                <h2>ウイスキー</h2>
                <img className = 'wisky-image'　src = {Icon} alt = ''></img>
                <p>スコッチ　アイリッシュ　アメリカン　カナディアン　ジャパニーズの５大産地。<br/>おすすめの銘柄を共有しよう！</p>
                <Button className = 'wisky-button' onClickHandler = {()=>{history.push('/tweet')}}>
                        記録する
                </Button>
            </div>
            <div className = 'journey'>
                <h2>旅</h2>
                <img className = 'journey-image' src = {Icon2} alt = ''></img>
                <p>なかなか外出できない。裏を返せば、本当に行きたい場所を見つけるチャンス！</p>
                <Button onClickHandler = {()=>{history.push('/tweet')}}>
                     記録する
                </Button>
            </div>
            <div className = 'muscle'>
                <h2>筋トレ</h2>
                <img className = 'muscle-image' src = {Icon3} alt = ''></img> 
                <p>マッチョになりたい！教えてそこのマッチョ！</p>
                <Button onClickHandler = {()=>{history.push('/tweet')}}>
                    記録する
                </Button>
            </div>
        </div>
    )
}

export default Home;