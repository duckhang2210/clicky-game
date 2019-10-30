import React, { Component } from "react";
import './App.css';
import Card from "./components/cardDisplay/Card";
import Header from "./components/header/Header";
import AlertArea from "./components/alertArea/AlertArea";
import characters from "./character.json";


class App extends Component{

  state ={
    characters,
    score: 0,
    picked: [],
    alertMessage: "Click at any character to play!!"
  };
  handlePicked = event => {

    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleCharacters()
    this.checkGuess(name, this.updateTopScore)
  }

  shuffleCharacters = () => {
    this.setState(this.state.characters = this.shuffleArray(this.state.characters))
  }

  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.picked.includes(name)) {
      newState.alertMessage = `LOSER!!! YOU ALREADY PICKED "${name.toUpperCase()}"! CLICK TO PLAY AGAIN`
      newState.picked = []
      this.setState(this.state = newState)
    } else {
      newState.picked.push(name)
      newState.alertMessage = `GOOD CHOICE!`
      this.setState(this.state = newState)
    }
    cb(newState, this.alertWinner)
  }

  updateTopScore = (newState, cb) => {
    if (newState.picked.length > newState.score) {
      newState.score++
      this.setState(this.state = newState)
    }
    cb(newState)
  }

  alertWinner = (newState) => {
    if (newState.picked.length === 12) {
      newState.alertMessage = "CHAMPION!";
      newState.picked = [];
      this.setState(this.state = newState)
    }
  }


  render(){
    return (
      <div className="container">
        <Header />
        <AlertArea 
          alertMessage= {this.state.alertMessage}
          topScore= {this.state.score}
          score = {this.state.picked.length}
        />
        <div className="row justify-content-md-center">
          {this.state.characters.map(char => (
            <Card 
            handlePicked={this.handlePicked}
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
