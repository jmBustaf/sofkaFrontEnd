import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6F7',
  },
  iframe: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    border: 'none'
  },
  form: {
    width: '100%',
    marginTop: '3vh',
  },
  submit: {
    margin: "3px, 0px, 2px, 3px",
    color: '#FFFFFF',
    backgroundColor: '#fefefe'
  },
}))
