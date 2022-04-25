import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { useNavigate } from 'react-router-dom'

const ModalConfirm = ({
    open,
    setOpen,
    continueGame,
    level,
    finishGame,
    updateCurrentGame
}: { 
    open: boolean
    setOpen: (newState: boolean) => void
    continueGame: () => void,
    level: number,
    finishGame: () => void
    updateCurrentGame: () => void
}): JSX.Element => {

  const history = useNavigate()
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
    if(level >= 5)
    {
      updateCurrentGame()
      handleClose()
      finishGame()
    } 
    else
    {
      updateCurrentGame()
      continueGame()
      handleClose()
    }
  }

  const withdrawGame = async () => {
    updateCurrentGame()
    handleClose()    
    history('/history')
  }

  return (
    <Dialog
      open={open}
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
        <Button onClick={withdrawGame} color="primary">
          Retirarme
        </Button>  
      </DialogActions>
    </Dialog>
  )
}

export default ModalConfirm