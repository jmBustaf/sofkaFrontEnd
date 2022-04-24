import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

const ModalConfirm = ({
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
   const nextQuestion = async () => {
    console.log("siguiente pregutnta")
  }

  const finishGame = async () => {
    console.log("terminar") 
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
            ¡Respuesta correcta  \n
            \n`
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={nextQuestion} color="primary">
          Siguiente Pregunta
        </Button>     
        <Button onClick={finishGame} color="primary">
          Retirarme
        </Button>  
      </DialogActions>
    </Dialog>
  )
}

export default ModalConfirm