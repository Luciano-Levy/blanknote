/* eslint-disable default-case */
import {React, useState, useEffect} from 'react';
import '../styles/config.css'
import Config from './Config.jsx'
import {ReactComponent as ConfigIcon} from '../images/config.svg';
import {configsInit} from './functions.js'

export default function CongifMenu({containerRef}){

  const[fontSize,SetfontSize] = useState(null)
  const[font,Setfont] = useState(null)
  const[color,Setcolor] = useState(null)
  const[backgroundColor,SetbackgroundColor] = useState(null);

  const[shift, Setshift] = useState(true);

  // config searcher
  useEffect(()=>{

    configsInit(Setcolor,SetbackgroundColor,Setfont,SetfontSize)

  },[])

  //config setter
  useEffect(() => {
    const bodyStyle = document.body.style
    bodyStyle.backgroundColor = backgroundColor;
    bodyStyle.fontFamily = font;
    containerRef.current.style.color = color;
    containerRef.current.style.fontSize = fontSize
  })

  function configMenuHandler(e){
    e.preventDefault()
    Setshift(!shift);
  }

  function configHandler(e){
    switch (e.target.id) {
      case 'color':
        
        Setcolor(e.target.value)
        localStorage.setItem('color', e.target.value)
        break;
      case 'backgroundColor':
        SetbackgroundColor(e.target.value)
        localStorage.setItem('backgroundColor', e.target.value)
        break;
      case 'font':
        Setfont(e.target.value)
        localStorage.setItem('font', e.target.value)
        break;
      case 'fontSize':
        SetfontSize(e.target.value)
        localStorage.setItem('fontSize', e.target.value)
        break;
  }
}

  // Seria mejor pasar las configuraciones en un Map o objeto para sacarle rigidez
  return(
    <div className='configBox'>
      <button  style={{display: shift ? 'block' : 'none'}}><ConfigIcon className='icon'  onClick={configMenuHandler}  ></ConfigIcon></button>
      <Config shift={shift} configHandler={configHandler} configMenuHandler={configMenuHandler}  placeholders={[font,fontSize,color,backgroundColor]}></Config>
    </div>
  );
};
