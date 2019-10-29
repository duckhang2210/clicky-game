import React, { Component } from "react";
import './App.css';
import Card from "./components/cardDisplay/Card";
import Header from "./components/header/Header";
import characters from "./character.json";


class App extends Component{

  state ={
    characters,
    score: 0,
    picked: [],
    alertMessage: ""
  };

  shuffleImage = id => {

    const characters = this.state.characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
    this.setState({characters})

  }


  render(){
    return (
      <div className="container">
        <Header />
        <div className="row justify-content-md-center">
          {this.state.characters.map(char => (
            <Card 
            shuffleImage={this.shuffleImage}
            id={char.id}
            key={char.id}
            name={char.name}
            image={char.image}
            />

          ))}
        </div>
      </div>
    );
  }
}

export default App;
