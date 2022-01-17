import {ReactComponent as CrossIcon} from '../images/cross2.svg';
import '../styles/config.css'

export default function Config(props){

  // key random en los color es un fix para que cambie dinamicamente

  //TD generar los elementos dinamicamente
  return(

    <form style={{display: props.shift ? 'none' : 'block'}}>

      <div className='configForm'>
        <div id='crossDiv'><button><CrossIcon className='icon' onClick={props.configMenuHandler}></CrossIcon></button></div>
        <div>
          <label htmlFor='font'>Fuente</label>
          <input name='font' id='font' type="text"  placeholder={props.placeholders[0]} onChange={props.configHandler}/>
        </div>
        <div>
          <label htmlFor='fontSize'>Tamaño fuente</label>
          <input name='fontSize' type="text" id='fontSize' placeholder={props.placeholders[1]} onChange={props.configHandler} />
        </div>
        <div>
          <label htmlFor='color'>Color</label>
          <input name='color' type="color" id='color' defaultValue={props.placeholders[2]} key={`${Math.floor((Math.random() * 1000))}-min`} onChange={props.configHandler} />
        </div>
        <div>
          <label htmlFor='backgroundColor'>Fondo</label>
          <input name='backgroundColor' type="color" id='backgroundColor' defaultValue={props.placeholders[3]} key={`${Math.floor((Math.random() * 1000))}-min`}  onChange={props.configHandler}/>
        </div>
      </div>
    </form>
  );
};
