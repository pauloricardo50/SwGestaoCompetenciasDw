import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row, Button } from "react-bootstrap";


function OptionGroup({opcoes, valor}) { 
  try{
    return opcoes.map((opcao, index) => {
      return (<option key={index} value={opcao}>{opcao}</option>)
    })
  }
  catch{
    alert("Erro ao carregas as tasks")
  }  
}

function FieldGroup({ label, opcoes, ...props}) {
  let tecnologias
  let value
  if(label==='Banco'){
    tecnologias = opcoes.bd
    value = 'banco'
  }
  else if(label==='Frontend'){
    tecnologias = opcoes.frontend
    value = 'frontend'
  }
  else if(label==='Backend'){
    tecnologias = opcoes.backend
    value = 'backend'
  }
  return (
    <FormGroup>
      <ControlLabel {...props.ControlLabel}>{label}</ControlLabel>
      <FormControl {...props} >
        <option value="NULO"> Escolha uma opção</option>
        <OptionGroup opcoes={tecnologias} valor = {value}/>
      </FormControl> 
    </FormGroup>
    
  );
}


export class FormInputsMultOption extends Component {
  
  render() {
    const button = this.props.button ? <Button>{this.props.button}</Button> : null;
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          
          <FieldGroup {...this.props.properties[i]} opcoes={this.props.opcoes}/> 
                   
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputsMultOption;
