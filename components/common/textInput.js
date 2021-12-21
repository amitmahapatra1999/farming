import React from 'react'

const Textinput = (props) => {
    return (
        <>
        <label className="form-label fw-bold">{props.name}</label>
        <input type={props.type} placeholder={props.placeholder} className="form-control" id={props.id} style={{marginBottom:"20px"}}/>
        </>
    )
}

export default Textinput
