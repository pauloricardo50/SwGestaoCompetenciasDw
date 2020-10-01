import React , { Component} from 'react';
import {
    Grid,
    Row,
  } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';

import { alertout } from '../../store/actions/alertas/alertas'


const initialState = {
    open: false,
    alertTitle: '',
    severity: '',
    texto: ''
}

class Alerta extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  onChangeOpen = () => {
    this.setState({ 
      open: true
    })
  }

  onChangeClose = () => {
    this.setState({ 
      open: false
    })
  }


  useStyles = () => {makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }))};


  render(props) {
    return (
        <Grid>
            <Row>
          <Collapse in={this.props.alerta.open}>
            
            <Alert severity={this.props.severity}  action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={async () => {
                    await this.props.alertout()
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }>
                <AlertTitle style={{fontWeight:"bold", fontSize:"1.8em",}}>{this.props.alertTitle}</AlertTitle>
                {this.props.texto}
            </Alert>
          </Collapse>
          </Row>
        </Grid>
      );
    
  }
}
const mapStateToProps = ({ usuario, alerta }) => {
  return {
      usuario,
      alerta
  }
}
const mapDispatchToProps = dispatch => {
  return {
    alertout: () => dispatch(alertout()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alerta)

