import React from 'react';



export default function Display(props){
  return(
    <div className='txtDisplay' onClick={props.changeDispl} style={{display: props.shift ? 'none' : 'block'}} >
      <pre >{(props.txt == null) ? "Escribi lo que quieras!!" : props.txt}</pre>
    </div>
  );
};
