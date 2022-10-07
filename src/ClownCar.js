import React, { Component } from 'react';
import Results from './Results.js'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function rollDice(numberOfDice) {
  let evenRolls = 0
  let oddRolls = 0
  let acc = [...Array(numberOfDice)].map((_, i) => {
    let roll = Math.floor(Math.random() * 2)
    if (roll == 1) {
      oddRolls++
    } else {
      evenRolls++
    }
  });

  let results = {
    rolledDice: numberOfDice,
    oddRolls: oddRolls,
    evenRolls: evenRolls
  }

  return results
}

class ClownCar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      numberOfDice: 100,
      rolledDice: "X",
      evenRolls: "X",
      oddRolls: "X"
    }
  }

  render () {
    return(
      <>
        <img className="rounded-edges" src="https://cards.scryfall.io/normal/front/c/6/c6667e4f-f0f6-4416-940a-d03bed75f5a7.jpg?1664224489" />
        <hr></hr>
        <TextField id="outlined-basic" label="Value of X" variant="standard" value={this.state.numberOfDice} onChange={ (e)=> this.setState({numberOfDice: parseInt(e.target.value)}) }/>
        <Button variant="text" onClick={() => this.setState(rollDice(this.state.numberOfDice))}>Roll Dice</Button>
        <Results {...this.state} />
      </>
    )
  }
}

export default ClownCar;
