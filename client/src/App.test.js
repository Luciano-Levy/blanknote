// Integration Test
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import * as functions from './components/functions'

describe('<App/>', () => {
    functions.configsInit = jest.fn()
    

    test('rendering', () => {
        const view = render(<App></App>)
        const InOut = screen.getAllByRole('textbox')
        InOut.forEach( element => expect(element).toBeInTheDocument() )

    })

    test('typing and display switch',() => {
        const view = render(<App></App>)

        const [Input, Display] = screen.getAllByRole('textbox')
        
        expect(Input).not.toHaveStyle('display: none ')
        userEvent.type(Input, 'Hola soy yo')

        
        const configButton = screen.getByRole('button')
        userEvent.click(configButton)
        const [InputText,DisplayText] = screen.getAllByText('Hola soy yo')
        expect(InputText).toHaveStyle('display: none ')
        expect(DisplayText).toHaveStyle('display: block')
        
        

    })

    test('configs',()=>{
        // ver si al ingresar una config se cambia efectivamente (seria chequear la implementacion?)
        const view = render(<App></App>)

        const configButton = screen.getByRole('button')
        userEvent.click(configButton)



    })


})