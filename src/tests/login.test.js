import React from "react";
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import App from '../App';
import userEvent from "@testing-library/user-event";

describe('Testa página de Login', () => {
    test('Verifica se a URL e os elementos estão corretos', () => {
        const {history} = renderWithRouterAndRedux(<App />);
        
        expect(history.location.pathname).toBe('/');
        expect(screen.getByTestId('email-input')).toBeInTheDocument();
        expect(screen.getByTestId('password-input')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
    });

    test('Verfica se os elementos têm os comportamentos esperados', () => {
        const { history } = renderWithRouterAndRedux(<App />);
    
        const email = screen.getByTestId('email-input');
        const password = screen.getByTestId('password-input');
        const loginButton = screen.getByRole('button', { name: /Entrar/i });
    
        userEvent.type(email, 'notEmail');
        expect(loginButton).toHaveAttribute('disabled');
    
        userEvent.type(email, 'email@email.com');
        expect(loginButton).toHaveAttribute('disabled');
    
        userEvent.type(password, '1234');
        expect(loginButton).toHaveAttribute('disabled');
    
        userEvent.type(password, '123456789');
        expect(loginButton).not.toHaveAttribute('disabled');
    
        userEvent.click(loginButton);
        expect(history.location.pathname).toBe('/carteira');
      });
});
