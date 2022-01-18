import React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';

const create = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <TextInput source="description" validate={required()} />
            <TextInput source="url" />
            <TextInput source="gitUrl" />
            <TextInput source="imgUrl" validate={required()} />
        </SimpleForm>
    </Create>
);

export default create;