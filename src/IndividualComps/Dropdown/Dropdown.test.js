import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';
import regions from '../regions'

test('selecting dropdown item', () => {

    var val = "London"

    const { getByTestId } = render(<Dropdown discreteVals={Object.keys(regions)} val={val} onChange={(e) => val = e.target.value} />);
    fireEvent.change(getByTestId("region-select"), { target: { value: "East Midlands" } })
    
    expect(val).toEqual("East Midlands")
});

