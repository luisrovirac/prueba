import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';

const ICONOS = {
    home: '../asset/img/interstitial-image-gold-only.png',
    play: 'https://icon2.kisspng.com/20171220/oiq/chess-horse-icon-png-image-5a3b3e08a6a8f5.7418616715138319446827.jpg',
    train: 'https://icon2.kisspng.com/20180411/qle/kisspng-computer-icons-home-house-home-5ace88fbeca630.9159409615234849239693.jpg',
    compartir: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    foro: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    login: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
  };
  const active = "active";

export class Menu extends React.Component {
    constructor(props){
        super(props);
        this.playx=this.playx.bind(this);
    }
    handleClick(e){
        const text = e.target.value;
        console.log("text->"+text);
        //this.props.chooseVideo(text);
    }
    homex(){
        alert("En HOMEx amigo Sax...");
    }
    playx(){
        alert("En playx amigo Sax...");
        console.log("this.active->"+this.active);
        //idhome
    }
    trainx(){
        alert("En TRAINx amigo Sax...");
    }
    sharex(){
        alert("En SHAREDx amigo Sax...");
    }
    forox(){
        alert("En FOROx amigo Sax...");
    }
    socialx(){
        alert("En SOCIALx amigo Sax...");
    }
    loginx(){
        alert("En LOGINx amigo Sax...");
    }
    render(){
        return(
            <form>
                <div className="navbar">
  <a className="active" href="#" onClick={this.homex}><i className="fa fa-fw fa-home"></i> Home</a> 
  <a href="#" onClick={this.playx}><i className="fa fa-fw fa-search"></i> Play</a> 
  <a href="#" onClick={this.trainx}><i className="fa fa-fw fa-envelope"></i> Train</a> 
  <a href="#" onClick={this.sharex}><i className="fa fa-fw fa-user"></i> Shared</a>
  <a href="#" onClick={this.forox}><i className="fa fa-fw fa-user"></i> foro</a>
  <a href="#" onClick={this.socialx}><i className="fa fa-fw fa-user"></i>Social Network</a>
  <a href="#" onClick={this.loginx}><i className="fa fa-fw fa-user"></i> Login</a>
                </div>
            </form>
        );
    }
}
ReactDOM.render(
    <Menu />, 
    document.getElementById('root')
  );