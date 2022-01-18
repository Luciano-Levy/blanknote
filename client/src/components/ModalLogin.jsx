import React, {useState, useRef} from 'react';
import Base64 from 'crypto-js/sha256'
import '../styles/modal.css';

//Tener las funciones en otro archivo me facilita el testing y la reutiizacion
function ModalLogin(props) {


  const container = useRef(null)
  const[username,Setusername] = useState('');
  const[loginAgain,SetloginAgain] = useState(false)

  function handleChange(e) {
    Setusername(e.target.value);
  };

  //cath error en consola
  function handleLogin(e){
    e.preventDefault();
    const usernameHash = Base64(username)


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user:usernameHash,txt: ''})
    };

    fetch("/api", requestOptions).then(response =>{
      if(response.status == 403){

        SetloginAgain(true)
        setTimeout(()=>{
          SetloginAgain(false)
        },2000)

      }else{
        localStorage.setItem('username', usernameHash);
        props.Setlogin(false);
      }
    })



  };


  return(
    <div className='cont'>
      <div ref={container} className={'modal' + ` ${loginAgain ? 'again' : 'nada'}`}>
          <form className='modalContent' onSubmit={handleLogin} name='form'>
            <input type='text' autoFocus placeholder='No te conozco... me decis quien sos?' onChange={handleChange}/>
          </form>
        </div>
    </div>

  );
};



export default ModalLogin;
