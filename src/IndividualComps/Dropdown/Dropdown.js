import { useState } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const Dropdown = ({discreteVals, val, onChange}) => {
    

    return (
        <FormControl fullWidth>
            <InputLabel></InputLabel>
            <Select
                value={val}
                onChange={ onChange }
                size="small"
                style={{shadow:"none"}}
                sx={{mt:"17px", mx:1}}
                inputProps={{ "data-testid": "region-select" }}
            >
                {discreteVals.map((discreteVal) => {
                    return <MenuItem key={discreteVal} value={discreteVal}
                            style={{margin:0}}
                            inputProps={{ "data-testid": "region-select-options" }}
                            >
                                {discreteVal}
                            </MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default Dropdown