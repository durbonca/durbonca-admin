import React from 'react'
import { List, Datagrid, TextField, TopToolbar, CreateButton} from 'react-admin';

const ListActions = (props) => {

    return (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>)
};


const list = (props) => {
    return (
        <List {...props} title="List of Categories" actions={<ListActions/>}>
           <Datagrid rowClick="edit">
                <TextField source="title" />
           </Datagrid>
        </List>
    )
}


export default list;