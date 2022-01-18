import React, {useState, useEffect, useRef} from 'react';
import './styles/text.css';
import ModalLogin from './components/ModalLogin.jsx';
import Display from './components/Display.jsx';
import Input from './components/Input.jsx';
import ConfigMenu from './components/ConfigMenu.jsx'

// usar destructuracion de ahora en mas, es mas facil saber que pide el componente
function Text() {

  const container = useRef(null)

  const[txt, Settxt] = useState('');

  const[shift, Setshift] = useState(true);

  const[login, Setlogin] = useState(true);



  //idenifacador
  useEffect(()=> {

    const user = localStorage.getItem('username');
    if (user != null ){
      Setlogin(false);
    }
    else {
        Setlogin(true);
    };
  },[]);

  //cargador
  useEffect(() => {

      

      const user = localStorage.getItem('username');
      if(user != null){


      const requestOptions = {
        method: 'GET',
      };

      fetch(`api/${user}`, requestOptions).then(response => response.json()).then(data => Settxt(data.text));



    };


  },[])


  //guardado del texto en db, cada ves que cambie el texto
  useEffect(() => {
    updateTxt(txt);
  }
,[txt]);



  //maneja el cambio de valores y intercambia visibilidad con el estatico
  //se puede hacer en una sola funcion
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
    <div id='main'>

      <ConfigMenu containerRef={container}></ConfigMenu>

      <div className='container' ref={container}>
        <Input changeInpt={changeInpt} txt={txt} shift={shift}></Input>
        <Display changeDispl={changeDispl} txt={txt} shift={shift}></Display>
      </div>
      {login && <ModalLogin Setlogin={Setlogin}></ModalLogin>}
    </div>
  );
};




export async function updateTxt(txt){

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({user:localStorage.getItem('username'),txt: txt})
  };

   fetch("/api", requestOptions);


}



export default Text;
