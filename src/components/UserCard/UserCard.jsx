import React, { Component } from "react";
import {Row} from 'react-bootstrap'
export class UserCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <a href="#pablo">
              <img
                className="avatar border-gray"
                src={this.props.avatar}
                alt="..."
              />
              <h4 className="title" style={{fontSize:"2.3em"}}>
                {this.props.name}
                <br />
                <small style={{fontSize:"0.6em"}}>{this.props.userName}</small>
              </h4>
            </a>
          </div>
          <div className="image" style={{marginTop:"2em", marginBottom:"-1em"}}>
            <img src={this.props.bgImage2} alt="..." />
          </div>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default UserCard;
