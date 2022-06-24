import React from 'react';
import {
    FormControl,
    Input,
    InputRightElement,
    FormLabel,
    InputGroup
} from '@chakra-ui/react';
import { useFormContext } from "react-hook-form";
import { IoMdEye } from 'react-icons/io'

function InputFloating({ label, name, type, defaultValue, eye, showPassword, setShowPassword}) {
    const { register } = useFormContext();
    const handleShowPassword = () => setShowPassword((prevShowPassowrd) => !prevShowPassowrd)
    return (
        <FormControl variant='floating'>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <Input mb={5} {...register(`${name}`)} focusBorderColor='black' type={type} defaultValue={defaultValue} />
                {
                    eye === 'eye' ? (
                        <InputRightElement children={<IoMdEye color='orange' onClick={() =>  handleShowPassword()}/>} />
                    ) : null
                }

            </InputGroup>
        </FormControl>
    );
}

export default InputFloating;