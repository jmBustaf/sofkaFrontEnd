import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'
import { IGame } from "../models/game" 

const HistoryItem = ({ game }: { game: IGame }): JSX.Element => {
  return (
    <Card /* sx={{ minWidth: 275, minHeight: 250 }} */>
      <CardContent>
      <Typography variant="h5" component="div">
         jugador: {game.name_player}
        </Typography>
        <br/>
        <Typography variant="body2">
          puntaje: {game.score}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HistoryItem