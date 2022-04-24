import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'

const BasicCard = (): JSX.Element => {
  return (
    <Card /* sx={{ minWidth: 275, minHeight: 250 }} */>
      <CardContent>
      <Typography variant="h5" component="div">
         Nombre Participante
        </Typography>
        <br/>
        <Typography variant="body2">
          Puntaje
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BasicCard