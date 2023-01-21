import React from 'react'
import {Field} from 'formik'
import { MenuItem, Select } from '@mui/material'


function MuiInput(props) {
    const { label, name, type, error, helperText, ...rest } = props
  return (
    <div>
        <Field as={Select} name={name} type={type}  variant="outlined" color="primary" label={label}  error={error} helperText={helperText}>  {/*The "error" props makes the border red if it is true (ie when there's an error), the helper text displays the error message*/}
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Field>
    </div>
  )
}

export default MuiInput