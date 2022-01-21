import React from 'react';
import { Edit, AutocompleteArrayInput, ReferenceArrayInput, SimpleForm, TextInput, required } from 'react-admin';

const edit = (props) => {
    return (
        <Edit {...props}>
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
    </Edit>
    )
}

export default edit
