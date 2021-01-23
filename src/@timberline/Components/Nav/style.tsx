import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  appBar: {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'flex-start',
  },
  logo: {
    height: '80px',
    'margin-right': '50px',
  },
}))
