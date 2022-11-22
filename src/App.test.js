import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders dropdown', () => {
  const {getByTestId, getAllByTestId} = render(<App />);
  fireEvent.change(getByTestId("region-select"), { target: { value: "East Midlands" } })
  const options = getAllByTestId("region-select-options");
  
  expect(options[0].selected).toBeTruthy()
});
