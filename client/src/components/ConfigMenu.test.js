/* eslint-disable testing-library/no-node-access */
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ConfigMenu from './ConfigMenu.jsx';
import * as functions from './functions'



describe('<ConfigMenu>', () => {
  

  
  functions.configsInit = jest.fn()
  // container.current.style para cambiar el estilo del div del texto
  const view = render(<ConfigMenu containerRef={{current: {style : {fontSize: 12 , color:'#ffffff', fontFamily:'aca', backgroundColor:'#222222'}}}}></ConfigMenu>)


  /*test('rendering' , () => {

    expect(functions.configsInit).toHaveBeenCalled()

  })*/

  test('click on config and close', () => {

    const configButton = screen.getByRole('button')


    userEvent.click(configButton.firstChild)
    expect(configButton).toHaveStyle('display: none')

    const crossIcon = screen.getByText('cross2.svg')
    userEvent.click(crossIcon)
    expect(configButton).not.toHaveStyle('display: none')


  })

})
