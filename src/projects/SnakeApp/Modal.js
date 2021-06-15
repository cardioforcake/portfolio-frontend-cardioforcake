import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './Modal.css'
// import userEvent from "@testing-library/user-event";
import CommentCRUD from './components/CommentCRUD/CommentCRUD'


class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }
  

  render() {
    return (
      <div className="modal-button">
        <a
          className="modal-trigger"
          data-target={this.props.idx}
        >
          <button className="updateButton btn light-green accent-4 waves-effect waves-light">{this.props.userComment.comment ? 'Edit Comment' : 'Add Comment'}</button>
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={this.props.idx}
          className="modal  modal-display"
        >
          <div className="modal-content">
            <CommentCRUD setComments={this.props.setComments} userComment={this.props.userComment} user={this.props.user} setUserComment={this.props.setUserComment}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;