import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { connect } from 'react-redux';


export class TasksRelatorio extends Component {


  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };

 
  render() {
    const projectGet = this.props.projetos.getProjetos.projetos
    const tasksGet = this.props.tasks.getTasks.tasks
    var tasksList = []
    if(tasksGet!== undefined){
      tasksGet.map((task, index) => {
        projectGet.map((projeto, index) => {
          if(projeto._id === task.project){
            tasksList.push("("+projeto.title+")  " + task.title + " --- " + task.about)
          }
        })       
      })
    }
   
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    
    var tasks = [];
    var number;
    for (var i = 0; i < tasksList.length; i++) {
      number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          <td>
            <Checkbox
              number={number}
              isChecked={i === 1 || i === 2 ? true : false}
            />
          </td>
          <td>{tasksList[i]}</td>
          <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={remove}>
              <Button bsStyle="danger" simple type="button" bsSize="xs">
                <i className="fa fa-times" />
              </Button>
            </OverlayTrigger>
          </td>
        </tr>
      );
    }
    return <tbody>{tasks}</tbody>;
  }
}

const mapStateToProps = ({ usuario, projeto, task }) => {
  return {
    usuario,
    projeto,
    task
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksRelatorio)
