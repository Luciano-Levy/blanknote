import {useState, useEffect} from 'react';

// Identificar los usuarios
export default function useIdentificator(Setlogin, Settxt) {

  function retrieveTxt(){

  };


  // solo al montar
  useEffect(()=> {
    const user = localStorage.getItem('username');
    if (user != null ){
      Setlogin(false);

    }
    else {
        Setlogin(true);
    };
  },[]);
  // leer localStorage
  //chequear si el usuario existe
  //si no existe crearlo y guardarlo
  //si existe exhibir datos con una funcion


};
