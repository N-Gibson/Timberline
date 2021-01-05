import React from 'react'
import { useSnackbar, WithSnackbarProps } from 'notistack'

interface IProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void
}

const InnerSnackbarUtilsConfig: React.FC<IProps> = (props: IProps) => {
  props.setUseSnackbarRef(useSnackbar())
  return null
}

let useSnackbarRef: WithSnackbarProps
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp
}

export const SnackbarUtilsConfig = () => {
  return <InnerSnackbarUtilsConfig setUseSnackbarRef={setUseSnackbarRef} />
}

export default {
  success(msg: string, options: any = {}) {
    this.toast(msg, { ...options, variant: 'success' })
  },
  error(msg: string, options: any = {}) {
    this.toast(msg, { ...options, variant: 'error' })
  },
  toast(msg: string, options: any = {}) {
    useSnackbarRef.enqueueSnackbar(msg, options)
  },
}
