import React from 'react'
import { List, Datagrid, TextField, UrlField, TopToolbar, CreateButton} from 'react-admin';

const ListActions = (props) => {

    return (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>)
};


const list = (props) => {
    return (
        <List {...props} title="List of projects" actions={<ListActions/>}>
           <Datagrid>
                <TextField source="title" />
                <TextField source="description" />
                <UrlField source="url" />
                <UrlField source="gitUrl" />
                <UrlField source="imgUrl" />
           </Datagrid>
        </List>
    )
}


export default list;