import React from "react";
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import userEvent from "@testing-library/user-event";
import Wallet from "../pages/Wallet";
import mockData from "./helpers/mockData";

const initialState = {
    user: {
      email: 'email@email.com',
    },
    wallet: {
      currencies: [...Object.keys(mockData).filter((code) => code !== 'USDT')], 
      expenses: [
        {
          id: 1,
              description: 'despesa1',
              value: '40',
              currency: 'CAD',
              method: 'Cartão de débito',
              tag: 'Trabalho',
              exchangeRates: mockData,
        },
        {
          id: 2,
              description: 'despesa2',
              value: '50',
              currency: 'USD',
              method: 'Dinheiro',
              tag: 'Lazer',
              exchangeRates: mockData,
        }
      ],
      headerCurrency: 'BRL',
      editor: false, 
      idToEdit: 0, 
      isLoading: false,
      error: '',
    }
  };
  
describe('Testa o componente Table', () => {
    beforeEach(async () =>{
      global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue(mockData),
      });
  
      renderWithRouterAndRedux(<Wallet/>, {initialState})
      await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  });
   afterEach(() => jest.clearAllMocks());  
    test('Testa se é possível remover uma despesa', () => {
      const removeButton = screen.getAllByRole('button', { name: /excluir/i });
  
      userEvent.click(removeButton[0])
  
      })

});