import React, {Component} from 'react';
import Input from './Input/Input';
import Output from "./Output/Output";
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    userInput: ""
  };

  inputChangeHandler = event => {
    let state = { ...this.state };
    state.userInput = event.target.value;
    this.setState(state);
  };

 deleteCharHandler = index => {
     let txt = this.state.userInput.split('');
     txt.splice(index,1);
     txt = txt.join('');
     this.setState({userInput: txt})
 }

  render() {
    return (
      <div>
        <Input
          changed={this.inputChangeHandler}
          userInput={this.state.userInput}
        />
        <Output textSize={this.state.userInput.length} />
        <ValidationComponent textSize={this.state.userInput.length} />
        {this.state.userInput.split("").map((char, idx) => (
          <CharComponent
            key={idx}
            char={char}
            click={this.deleteCharHandler.bind(this,idx)}
          />
        ))}
      </div>
    );
  }
}


export default App;