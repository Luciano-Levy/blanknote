/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import Config from './Config.jsx';


describe('<Config/>', () => {

  //TD automatizar los test
  const configMenuHandlerMock = jest.fn();
  const configHandlerMock = jest.fn();
  


  test('rendering' , () => {

    const view = render(<Config shift='true' configMenuHandler={configMenuHandlerMock} configHandler={configHandlerMock} placeholders={['Arial', '22px', '#ffffff', '#000000']}></Config>);
    expect(view.getByPlaceholderText('Arial')).toBeInTheDocument()
    expect(view.getByPlaceholderText('22px')).toBeInTheDocument()
    expect(screen.getByLabelText('Color')).toBeInTheDocument()
    expect(screen.getByLabelText('Fondo')).toBeInTheDocument()





  })

  test('playing with the configuration', () => {
    const view = render(<Config shift='true' configMenuHandler={configMenuHandlerMock} configHandler={configHandlerMock} placeholders={['Arial', '22px', '#ffffff', '#000000']}></Config>);
    const font =  view.getByPlaceholderText('Arial')
    font.focus()
    userEvent.type(font,'Times');
    expect(configHandlerMock).toHaveBeenCalled()

    configHandlerMock.mockClear()

    const fontSize =  view.getByPlaceholderText('22px')
    fontSize.focus()
    userEvent.type(fontSize,'16px');
    expect(configHandlerMock).toHaveBeenCalled()


    configHandlerMock.mockClear()

    const color =  screen.getByLabelText('Color')
    //console.log(color.nextElementSibling);
    //fireEvent.input(color, {target: '#222333'})
    //expect(configHandlerMock).toHaveBeenCalled()



  })


  test('close', () =>{

  })



})
