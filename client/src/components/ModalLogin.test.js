import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ModalLogin from './ModalLogin.jsx';

describe('<ModalLogin/>', () => {

  test('typing event', () => {


    const component = render(<ModalLogin></ModalLogin>)

    const input = component.getByPlaceholderText('No te conozco... me decis quien sos?')

    userEvent.type(input, 'Jose Maria')
    expect(input).toHaveValue('Jose Maria')
    //test from

  })

  test('form submit', () => {

    //have to mock and extract the handler
    const mockLogin = jest.fn()

    const component = render(<ModalLogin Setlogin={mockLogin}></ModalLogin>)

    const input = component.getByPlaceholderText('No te conozco... me decis quien sos?');

    const form = component.getByRole('form');

    userEvent.type(input, 'Jose Ma3ria{enter}');

    
  })

})
