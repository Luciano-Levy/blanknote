import {React} from 'react';

export default function Input(props){

  //como funciona el placeholder con el servidor

  return(
    <>
      <textarea className='txtInput' spellCheck='false' placeholder='Escribi lo que quieras!!' onBlur={props.changeInpt} style={{display: props.shift ? 'block' : 'none'}} defaultValue={props.txt}></textarea>
    </>
  );
};
