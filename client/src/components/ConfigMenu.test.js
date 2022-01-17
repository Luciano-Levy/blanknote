import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ConfigMenu from './ConfigMenu.jsx';
import * as functions from './functions'



describe('<ConfigMenu>', () => {
  let component

  beforeEach(() => {
    functions.configsInit = jest.fn()
    // container.current.style para cambiar el estilo del div del texto
    component = render(<ConfigMenu containerRef={{current: {style : {fontSize: 12 , color:'#ffffff', fontFamily:'aca', backgroundColor:'#222222'}}}}></ConfigMenu>)
  })

  test('rendering' , () => {

    expect(functions.configsInit).toHaveBeenCalled()

  })

  test('click on config and close', () => {

    const configButton = component.getByRole('button')


    userEvent.click(configButton.firstChild)
    expect(configButton).toHaveStyle('display: none')

    const crossIcon = component.getByText('cross2.svg')
    userEvent.click(crossIcon)
    expect(configButton).not.toHaveStyle('display: none')


  })

})
