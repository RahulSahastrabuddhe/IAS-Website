import React, {Component} from "react";

class Logo extends Component {
    render(){
        console.log(this.props.logolink);
        return(
            <>
                <img id="logo"
                  //src={require('./../../public/images/' + this.props.logolink + '.png')}
                  src={this.props.logolink}
                  alt="IAS"
                  width={this.props.logowidth}
                  height={this.props.logoheight} />
          </>
        );
    }
}
export default Logo;