import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row, Button } from "react-bootstrap";


function FieldGroup({ label, ...props }) {
  return (
    <FormGroup>
      <ControlLabel {...props.ControlLabel}>{label}</ControlLabel>
      <FormControl {...props} /> 
    </FormGroup>
    
  );
}


export class FormInputs extends Component {
  
  render() {
    const button = this.props.button ? <Button>{this.props.button}</Button> : null;
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.properties[i]} /> 
                   
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputs;
