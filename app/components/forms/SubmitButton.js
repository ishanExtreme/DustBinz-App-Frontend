import React from 'react';
import {useFormikContext} from 'formik'

import LongButton from '../LongButton';

function SubmitButton({title, disable}) {

    const {handleSubmit} = useFormikContext();

    return (
        <LongButton title={title} onPress={handleSubmit} disable={disable}/>
    );
}

export default SubmitButton;