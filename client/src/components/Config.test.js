import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Config from './Config.jsx';


describe('<Config/>', () => {

  //TD automatizar los test
  let component;
  const configMenuHandlerMock = jest.fn();
  const configHandlerMock = jest.fn();

  beforeEach(() => {

    component = render(<Config shift='true' configMenuHandler={configMenuHandlerMock} configHandler={configHandlerMock} placeholders={['Arial', '22px', '#ffffff', '#000000']}></Config>)

  })

  test('rendering' , () => {

    expect(component.getByPlaceholderText('Arial')).toBeInTheDocument()
    expect(component.getByPlaceholderText('22px')).toBeInTheDocument()
    expect(component.getByLabelText('Color')).toBeInTheDocument()
    expect(component.getByLabelText('Fondo')).toBeInTheDocument()





  })

  test('playing with the configuration', () => {

    const font =  component.getByPlaceholderText('Arial')
    font.focus()
    userEvent.type(font,'Times');
    expect(configHandlerMock).toHaveBeenCalled()

    configHandlerMock.mockClear()

    const fontSize =  component.getByPlaceholderText('22px')
    fontSize.focus()
    userEvent.type(fontSize,'16px');
    expect(configHandlerMock).toHaveBeenCalled()


    configHandlerMock.mockClear()

    const color =  component.getByLabelText('Color')
    console.log(color.nextElementSibling);
    //fireEvent.input(color, {target: '#222333'})
    //expect(configHandlerMock).toHaveBeenCalled()



  })


  test('close', () =>{

  })



})
