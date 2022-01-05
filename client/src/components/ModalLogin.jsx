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
    //console.log(props.query)
    localStorage.setItem('username', username);
    props.Setlogin(false);

  };


  return(
    <div className='cont'>
      <div className='modal'>
          <form className='modal-content' onSubmit={handleLogin} method='post' action='/'>
            <input type='text' placeholder='No te conozco... me decis quien sos?' onChange={handleChange}/>
          </form>
        </div>
    </div>

  );
};



export default ModalLogin;
