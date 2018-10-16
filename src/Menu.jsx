import React from 'react';
import ReactDOM from 'react-dom';
import Items from './Items';
import './Menu.css';

const ICONOS = {
    home: '../asset/img/interstitial-image-gold-only.png',
    play: 'https://icon2.kisspng.com/20171220/oiq/chess-horse-icon-png-image-5a3b3e08a6a8f5.7418616715138319446827.jpg',
    train: 'https://icon2.kisspng.com/20180411/qle/kisspng-computer-icons-home-house-home-5ace88fbeca630.9159409615234849239693.jpg',
    compartir: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    foro: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    login: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
  };

export class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: 
            [
               {
                  "idx":1,
                  "namex":"Home",
                  "activex":"True",
                  "functionx":"this.homex",
                  "widthx":"30",
                  "iconx":"fa fa-fw fa-home"
               },
               {
                  "idx":2,
                  "namex":"Play",
                  "activex":"False",
                  "functionx":"this.playx",
                  "widthx":"30",
                  "iconx":"fa fa-fw fa-search"
               },
               {
                 "idx":3,
                 "namex":"Train",
                 "activex":"False",
                 "functionx":"this.trainx",
                 "widthx":"30",
                 "iconx":"fa fa-fw fa-envelope"
               },
                {
                 "idx":4,
                 "namex":"Share",
                 "activex":"False",
                 "functionx":"this.sharex",
                 "widthx":"30",
                 "iconx":"fa fa-fw fa-user"
               },
                {
                  "idx":5,
                  "namex":"Foro",
                  "activex":"False",
                  "functionx":"this.forox",
                  "widthx":"30",
                  "iconx":"fa fa-fw fa-search"
                 },
                 {
                  "idx":6,
                  "namex":"Social Network",
                  "activex":"False",
                  "functionx":'this.socialx',
                  "widthx":"30",
                  "iconx":"fa fa-fw fa-envelope"
                 },
                 {
                  "idx":7,
                  "namex":"Login",
                  "activex":"False",
                  "functionx":"this.loginx",
                  "widthx":"30",
                  "iconx":"fa fa-fw fa-user"
                 }
            ]
         }
    }
    render(){
        return(
            <form>
                <div className="navbar">
                    {
                        this.state.data.map((option) => {
                        return (
                        <Items 
                        key={option.idx} 
                        idx={option.idx} 
                        namex={option.namex} 
                        activex={option.activex} 
                        functionx ={option.functionx}
                        widthx={option.widthx} 
                        iconx={option.iconx} 
                        /> )
                        })
                    }

                </div>
            </form>
        );
    }
}
ReactDOM.render(
    <Menu />, 
    document.getElementById('root')
);