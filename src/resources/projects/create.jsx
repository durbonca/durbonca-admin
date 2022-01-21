import React from 'react';
import { Create, SimpleForm, AutocompleteArrayInput, ArrayInput, TextInput, required, ReferenceArrayInput, SimpleFormIterator } from 'react-admin';

const create = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput style={{width: '100%'}} source="title" validate={required()} />
            <TextInput style={{width: '100%'}} source="description" validate={required()} />
            <TextInput style={{width: '100%'}} source="url" />
            <TextInput style={{width: '100%'}} source="gitUrl" />
            <TextInput style={{width: '100%'}} source="imgUrl" validate={required()} />
            <ReferenceArrayInput source="categoriesProjects" reference="categoriesProjects">
                <AutocompleteArrayInput optionText='title' />            
            </ReferenceArrayInput>      
        </SimpleForm>
    </Create>
);

export default create;