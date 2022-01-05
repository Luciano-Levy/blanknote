import React, {useState, useEffect} from 'react';
import './styles/text.css';
import useIdentificator from './modulos/idenficatorHook.js';
import ModalLogin from './components/ModalLogin'


function Text() {

  const[txt, Settxt] = useState('');

  //true == escribir
  const[shift, Setshift] = useState(true);

  //const[user, SetUser] = useState('')

  const[login, Setlogin] = useState(true)

  //guardado del texto en db, cada rende
  useEffect(() => {
    console.log('guardado')
  }
);

  useIdentificator(Setlogin, Settxt);

  //maneja el cambio de valores y intercambia visibilidad con el estatico
  function changeInpt(e){
    const textareaValue = e.target.value;
    if (textareaValue.length > 0) {
      Setshift(false);
      Settxt(textareaValue);

    };
  };

  function changeDispl(e){
    Setshift(true);
  };
  //

  return(
    <div>

      <div className='container'>
        <Input changeInpt={changeInpt} shift={shift}></Input>
        <Display changeDispl={changeDispl} txt={txt} shift={shift}></Display>
      </div>
      {login && <ModalLogin Setlogin={Setlogin}></ModalLogin>}
    </div>
  );
};

export function Input(props){
  return(
    <>
      <textarea className='txtInput' spellCheck='true' placeholder='Escribi lo que quieras!!' autoFocus onBlur={props.changeInpt} style={{display: props.shift ? 'block' : 'none'}}></textarea>
    </>
  );
};

export function Display(props){
  return(
    <div className='txtDisplay' onClick={props.changeDispl} style={{display: props.shift ? 'none' : 'block'}} >
      <pre >{props.txt}</pre>
    </div>
  );
};




export default Text;
