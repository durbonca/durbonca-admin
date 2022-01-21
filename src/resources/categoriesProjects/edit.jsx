import React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';

const edit = (props) => {
    return (
        <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
        </SimpleForm>
    </Edit>
    )
}

export default edit
