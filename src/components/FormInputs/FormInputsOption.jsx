import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row, Button } from "react-bootstrap";


function OptionGroup({membros}) {
  return membros.map((membro, index) => {
    return (<option key={index} value={membro._id}>{membro.email}</option>)
  })
}



function FieldGroup({ label, membros, ...props}) {
    
  return (
    <FormGroup>
      <ControlLabel {...props.ControlLabel}>{label}</ControlLabel>
      <FormControl {...props} >
        <option value="NULO"> Escolha uma opção</option>
        <OptionGroup membros={membros}/>
      </FormControl> 
    </FormGroup>
    
  );
}


export class FormInputsOption extends Component {
  
  render() {
    const button = this.props.button ? <Button>{this.props.button}</Button> : null;
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          
          <FieldGroup {...this.props.properties[i]} membros={this.props.membros}/> 
                   
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputsOption;
