import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  formContent: {
    margin: '5px auto',
    width: '100%',
    '& div': {
      display: 'flex',
      'align-items': 'center',
    },
  },
}))
