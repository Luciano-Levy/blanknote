import React from 'react';

export default function Input(props){
  return(
    <>
      <textarea className='txtInput' spellCheck='true' placeholder={(props.txt != '')  ?  'Escribi lo que quieras!!' : props.txt} onBlur={props.changeInpt} style={{display: props.shift ? 'block' : 'none'}} defaultValue={props.txt}></textarea>
    </>
  );
};
