import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, width , setDisable ,...otherProps}) {

    const {setFieldTouched, 
        setFieldValue, 
        errors, touched, values, initialValues} = useFormikContext();
    
    const handleChange = (text)=>{
        setFieldValue(name, text)
        if(setDisable)
            if(text!==initialValues[name]) setDisable(false)
            else setDisable(true)
    }

    return (
        <>
            <AppTextInput
            onChangeText={handleChange}
            value = {values[name]}
            onBlur={()=>setFieldTouched(name)}
            width = {width}
            {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;