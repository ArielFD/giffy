import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link',async () => {
  render(<App />);
  const linkElement =await screen.findByText(/Ultima busqueda/i);
  expect(linkElement).toBeInTheDocument();
});

test('search form be used', async()=>{
  render(<App/>)
  const input =await screen.findByRole('textbox')
  const button=await screen.findByRole('button')

  fireEvent.change(input,{target:{value:'Matrix'}})
  fireEvent.click(button)

  const title= await screen.findByText('Matrix')
  expect(title).toBeVisible()
})