import React from 'react';

export const cameraRef =  React.createRef();


const navigate = (name, params)=> {

        // means if not null navigate is called else nothing happens
        cameraRef.current?.navigate(name, params);
}

export default {
    navigate,
};