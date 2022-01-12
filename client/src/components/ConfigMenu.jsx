import {React, useState, useEffect} from 'react';
import '../styles/config.css'
import {ReactComponent as ConfigIcon} from '../images/config.svg';
import {ReactComponent as CrossIcon} from '../images/cross.svg';
import rgbHex from 'rgb-hex';

export default function CongifMenu({containerRef}){

  const[fontSize,SetfontSize] = useState(null)
  const[font,Setfont] = useState(null)
  const[color,Setcolor] = useState(null)
  const[backgroundColor,SetbackgroundColor] = useState(null);

  const[shift, Setshift] = useState(true);

  // config searcher
  useEffect(()=>{

    const configs = ['color', 'backgroundColor', 'font', 'fontSize']

    // es repetitivo pero es mas seguro que estar usando plantillas literales con eval
    // bucar una manera DRY ya que los nombres de los estilos dependen de desde que objeto


    configs.map(a => {
      const configLocal = localStorage.getItem(a);
      if (configLocal != null){

      switch (a) {
        case 'color':
          Setcolor(configLocal)
          break;
        case 'backgroundColor':
          SetbackgroundColor(configLocal)
          break;
        case 'font':
          Setfont(configLocal)
          break;
        case 'fontSize':
          SetfontSize(configLocal)
          break;


      }
    }else{

      switch (a) {
        case 'color':
          const color = '#' + rgbHex(window.getComputedStyle(document.body).getPropertyValue('color'))
          Setcolor(color)
          localStorage.setItem('color', color)
          break;
        case 'backgroundColor':
          const backgroundColor =  '#' + rgbHex(window.getComputedStyle(document.body).getPropertyValue('background-color'))
          SetbackgroundColor(backgroundColor)
          localStorage.setItem('backgroundColor', backgroundColor)
          break;
        case 'font':
          const font = window.getComputedStyle(document.body).getPropertyValue('font-family')
          Setfont(font)
          localStorage.setItem('font',font)
          break;
        case 'fontSize':
          const fontSize =  window.getComputedStyle(document.body).getPropertyValue('font-size')
          SetfontSize(fontSize)
          localStorage.setItem('fontSize', fontSize)
          break;


    }
  }
})

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
    Setshift(!shift);
  }

  function configHandler(e){
    switch (e.target.id) {
      case 'color':
        console.log('aca');
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
      <ConfigIcon className='icon' onClick={configMenuHandler} style={{display: shift ? 'block' : 'none'}} ></ConfigIcon>
      <Config shift={shift} configHandler={configHandler} configMenuHandler={configMenuHandler} backgroundColor={backgroundColor} placeholders={[font,fontSize,color,backgroundColor]}></Config>
    </div>
  );
};

export function Config(props){

  // hacer los manejadores de eventos en Ap
  // si se agregan mas configs generar los elementos dinamicamente
  return(

    <form style={{display: props.shift ? 'none' : 'block'}}>

      <div className='configForm'>
        <CrossIcon className='icon' onClick={props.configMenuHandler}></CrossIcon>
        <div>
          <label>Fuente</label>
          <input id='font' type="text"  placeholder={props.placeholders[0]} onChange={props.configHandler}/>
        </div>
        <div>
          <label>Tamaño fuente</label>
          <input type="text" id='fontSize' placeholder={props.placeholders[1]} onChange={props.configHandler} />
        </div>
        <div>
          <label>Color</label>
          <input type="color" id='color' defaultValue={props.placeholders[2]} key={`${Math.floor((Math.random() * 1000))}-min`} onChange={props.configHandler} />
        </div>
        <div>
          <label>Fondo</label>
          <input type="color" id='backgroundColor' defaultValue={props.placeholders[3]} key={`${Math.floor((Math.random() * 1000))}-min`}  onChange={props.configHandler}/>
        </div>
      </div>
    </form>
  );
};
