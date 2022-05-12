import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  formContent: {
    margin: '5px auto',
    width: '100%',
    '& div': {
      display: 'flex',
      'align-items': 'center',
      'margin-bottom': '20px'
    },
  },
  description: {
    width: '100%'
  },
  submit: {
    height: '40px'
  }
}))
