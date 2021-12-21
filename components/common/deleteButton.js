import React from "react";

const DeleteButton = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <div
            className="delete-button"
            style={{ position: "absolute", zIndex: "999" }}
          >
            <a href="#">
              <i className="far fa-trash-alt" style={{ color: "red" }}></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteButton;
