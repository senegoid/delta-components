import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import MUiSnackbar from '@material-ui/core/Snackbar'

import SnackbarContent from './SnackbarContent'

import styles from './styles'

class Snackbar extends React.Component {
  state = { open: true }

  handleClose = async (event, reason) => {
    if (reason === 'clickaway') return
    await this.setState({ open: false })
  }

  render () {
    const { classes, message, variant, other, anchorOrigin, autoHideDuration, avatar } = this.props
    const { open } = this.state
    return (
      <MUiSnackbar {...other} anchorOrigin={anchorOrigin} open={open} autoHideDuration={autoHideDuration} onExited={this.onExited} className={classes.snackbar} onClose={this.handleClose}>
        <SnackbarContent variant={variant} message={message} onClose={this.handleClose} avatar={avatar} />
      </MUiSnackbar>
    )
  }
}
Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right'
  }
}
Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node,
  avatar: PropTypes.string,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
    vertical: PropTypes.oneOf(['top', 'bottom']).isRequired
  }),
  autoHideDuration: PropTypes.number,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info'])
}

export default withStyles(styles)(Snackbar)
