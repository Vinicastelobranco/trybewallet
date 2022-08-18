import React from "react";
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import userEvent from "@testing-library/user-event";
import Wallet from "../pages/Wallet";
import mockData from './helpers/mockData'; 

  
  describe('Testa a página Wallet', () => { 
    test('Verifica se renderiza o Header', () => {
      const {history} = renderWithRouterAndRedux(<Wallet />, {
        initialPath: "/carteira",
        initialState: { user: { email: "email@email.com" } },
      });
  
      const email = screen.getByTestId('email-field')
      const total = screen.getByTestId('total-field')
      const currency = screen.getByTestId('header-currency-field')
  
      expect(email).toBeInTheDocument()
      expect(total).toBeInTheDocument()
      expect(currency).toBeInTheDocument()
      expect(email).toHaveTextContent('email@email.com')
    expect(total).toHaveTextContent('0.00')
    expect(currency).toHaveTextContent('BRL')

    });

    test('Verifica se renderiza o Wallet Form', async () => { 
        renderWithRouterAndRedux(<Wallet />, {
          initialPath: "/carteira",
          initialState: { 
            user: { email: "email@email.com" },
        },
        });
    
        const apiResponse = Promise.resolve({
          json: () => Promise.resolve(mockData),
          ok: true,
        });
    
        const mockedExchange = jest
          .spyOn(global, "fetch")
          .mockImplementation(() => apiResponse);
    
        const value = screen.getByTestId('value-input')
        const description = screen.getByTestId('description-input')
        const currency = screen.getByTestId('currency-input')
        const method = screen.getByTestId('method-input')
        const tag = screen.getByTestId('tag-input')
        const buttonAdd = screen.getByRole('button', {
          name: /adicionar despesa/i
        })
    
        expect(value).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(currency).toBeInTheDocument()
        expect(method).toBeInTheDocument()
        expect(tag).toBeInTheDocument()
        expect(buttonAdd).toBeInTheDocument()
    
        expect(await screen.findByText("USD")).toBeInTheDocument();
    
        userEvent.type(value,'123')
        userEvent.click(buttonAdd)
    
        await waitFor(() => expect(mockedExchange).toHaveBeenCalledTimes(1))
       
      });
    });
