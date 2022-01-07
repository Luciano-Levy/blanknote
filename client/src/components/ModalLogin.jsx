import React, {useState} from 'react';
import '../styles/modal.css';

//vamos con express me soluciona la vida
function ModalLogin(props) {

  const[username,Setusername] = useState('');

  function handleChange(e) {
    Setusername(e.target.value);
  };

  function handleLogin(e){
    e.preventDefault();
    localStorage.setItem('username', username);
    postUser(username);
    props.Setlogin(false);

  };


  return(
    <div className='cont'>
      <div className='modal'>
          <form className='modal-content' onSubmit={handleLogin}>
            <input type='text' placeholder='No te conozco... me decis quien sos?' onChange={handleChange}/>
          </form>
        </div>
    </div>

  );
};


export async function postUser(user){

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({user:user,txt: ''})
  };

  const rawResponse = await fetch("/api", requestOptions);


}

export default ModalLogin;
