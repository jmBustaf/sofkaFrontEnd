import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { useNavigate } from 'react-router-dom'

const ModalFinished = ({
    open,
    setOpen,
}: { 
    open: boolean,
    setOpen: (newState: boolean) => void
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
  const goHistory = async () => {
    handleClose()
    history('/')
  }

  return (
    <Dialog
      open={open}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <DialogContentText style={{whiteSpace: 'pre-line'}}>
          { `\n
            ¡felicitaciones, ganaste!
            \n`
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={goHistory} color="primary">
          Terminar
        </Button>  
      </DialogActions>
    </Dialog>
  )
}

export default ModalFinished