/* eslint-disable default-case */
import rgbHex from 'rgb-hex'


export function configsInit(Setcolor, SetbackgroundColor, Setfont, SetfontSize) {

  const configs = ['color', 'backgroundColor', 'fontSize', 'font']

  // es repetitivo pero es mas seguro que estar usando plantillas literales con eval
  // bucar una manera DRY ya que los nombres de los estilos dependen de desde que objeto


  configs.forEach(a => {
    const configLocal = localStorage.getItem(a);
    if (configLocal != null) {

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
    } else {

      switch (a) {
        case 'color':
          const color = '#' + rgbHex(window.getComputedStyle(document.body).getPropertyValue('color'))
          Setcolor(color)
          localStorage.setItem('color', color)
          break;
        case 'backgroundColor':
          const backgroundColor = '#' + rgbHex(window.getComputedStyle(document.body).getPropertyValue('background-color'))
          SetbackgroundColor(backgroundColor)
          localStorage.setItem('backgroundColor', backgroundColor)
          break;
        case 'font':
          const font = window.getComputedStyle(document.body).getPropertyValue('font-family')
          Setfont(font)
          localStorage.setItem('font', font)
          break;
        case 'fontSize':
          const fontSize = window.getComputedStyle(document.body).getPropertyValue('font-size')
          SetfontSize(fontSize)
          localStorage.setItem('fontSize', fontSize)
          break;


      }
    }
  })







}