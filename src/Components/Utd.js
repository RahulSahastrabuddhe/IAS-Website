import React, {Component} from "react";
import Logo from "./Logo";
class Utd extends Component {
    render(){
        return(
<div>
            <div className="utd-brand">
            <Logo logolink = 'images/wordmark_1L_white.svg' logowidth= '400' logoheight = '50'/>
            </div>
          </div>
        );
    }
}

export default Utd;