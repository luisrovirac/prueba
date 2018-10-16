import React from 'react';
import ReactDOM from 'react-dom';

const active = "active";


export class Items extends React.Component {
    constructor(props){
        super(props);
        this.controlclick=this.controlclick.bind(this);
    }
    controlclick(){
        {
            let cualx=this.props.idx;
            switch (cualx) {
                case 1:
                    this.homex()
                    break;
                case 2:
                    this.playx()
                    break;
                case 3:
                    this.trainx()
                    break;
                case 4:
                    this.sharex()
                    break;
                case 5:
                    this.forox()
                    break;
                case 6:
                    this.socialx()
                    break;
                case 7:
                    this.loginx()
            }
        }
    }
    homex(){
        alert("En HOMEx amigo Sax...");
    }
    playx(){
        alert("En playx amigo Sax...");
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
    render() {
        return (
          <div>
              <a href="#" className={this.props.activex} onClick={this.controlclick}><i className={this.props.iconx}></i>{this.props.namex}</a> 
          </div>
        );
    }
}
ReactDOM.render(
    <Items />, 
    document.getElementById('root')
);
export default Items;