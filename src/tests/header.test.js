import React from "react";
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import Wallet from "../pages/Wallet";
  
  describe('Testa o componente Header', () => { 
    test('Verifica se renderiza as informações', () => {
      const {history} = renderWithRouterAndRedux(<Wallet />);

    expect(screen.getByTestId('header-currency-field')).toBeInTheDocument();
    expect(screen.getByTestId('total-field')).toBeInTheDocument();
    expect(screen.getByTestId('email-field')).toBeInTheDocument();

    });

});