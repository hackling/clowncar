import React, { Component } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

function Results({rolledDice, oddRolls, evenRolls}) {
  return(
    <div className="results">
    <Box>
    <List>
    <ListItem>
    <Typography variant="h1" gutterBottom>
    <i className="ms ms-x ms-cost ms-shadow"></i> = {rolledDice}
    </Typography>
    </ListItem>

    <Typography variant="h2" gutterBottom>
      Put {evenRolls} counters on Clown Car
    </Typography>

    <Typography variant="h2" gutterBottom>
      Create {oddRolls || "x"} 1/1 tokens
    </Typography>
    </List>
    </Box>
    </div>
  )
}

export default Results;
