import React from 'react';
import {
    FormControl,
    Input,
    FormLabel
} from '@chakra-ui/react';
import { useFormContext } from "react-hook-form";

function InputFloating({ label, name, type, defaultValue }) {
    const { register } = useFormContext();
    return (
        <FormControl variant='floating'>
            <FormLabel>{label}</FormLabel>
            <Input mb={5} {...register(`${name}`)} focusBorderColor='black' type={type} defaultValue={defaultValue}/>
        </FormControl>
    );
}

export default InputFloating;