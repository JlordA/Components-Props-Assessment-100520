import React from "react";
import NotesContainer from "../Containers/NotesContainer";

class Header extends React.Component {
  render() {
    console.log(this.props)
    let word = this.props.text
    return (
      <div>
        <h1>{this.props.text}</h1>;
        
      </div>
      ) 
  }
}

export default Header;

