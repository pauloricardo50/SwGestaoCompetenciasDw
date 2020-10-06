import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row, Button } from "react-bootstrap";


function OptionGroup({opcoes}) {  
  try{
    if(opcoes[opcoes.length-1].email){
      return opcoes.map((opcao, index) => {
        return (<option key={index} value={opcao._id}>{opcao.email}</option>)
      })
    }
    else if(opcoes[opcoes.length-1].title){
      return opcoes.map((opcao, index) => {
        return (<option key={index} value={opcao._id}>{opcao.title}</option>)
      })
    }
  }
  catch{
    alert('Erro ao carregar projetos')  
  }  
}

function FieldGroup({ label, opcoes, ...props}) {
    
  return (
    <FormGroup>
      <ControlLabel {...props.ControlLabel}>{label}</ControlLabel>
      <FormControl {...props} >
        <option value="NULO"> Escolha uma opção</option>
        <OptionGroup opcoes={opcoes}/>
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
          
          <FieldGroup {...this.props.properties[i]} opcoes={this.props.opcoes}/> 
                   
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export default FormInputsOption;
