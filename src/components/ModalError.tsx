import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

const ModalError = ({
    open,
    setOpen,
}: { 
    open: boolean,
    setOpen: (newState: boolean) => void
}): JSX.Element => {
/*   const history = useHistory() */

  /**
   * This method is used to close dialog
   * @Return {void}
  */
   const handleClose = () => {
    setOpen(false)
  }

  /**
   * This is used to redirect the app.
  */
  const goHistory = async () => {
    console.log("siguiente pregutnta")
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <DialogContentText style={{whiteSpace: 'pre-line'}}>
          { `\n
            ¡Respuesta incorrecta  \n
            \n`
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={goHistory} color="primary">
          Siguiente Pregunta
        </Button>  
      </DialogActions>
    </Dialog>
  )
}

export default ModalError