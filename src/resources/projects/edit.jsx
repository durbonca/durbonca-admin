import React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const edit = (props) => {
    return (
        <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <RichTextInput source="description" validate={required()} />
        </SimpleForm>
    </Edit>
    )
}

export default edit
