import React from 'react'
import { List, Datagrid, TextField, UrlField, TopToolbar, CreateButton} from 'react-admin';

const ListActions = (props) => {

    return (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>)
};

const PostPanel = () => (
    <div style={{display:'flex', justifyItems: 'space-between', maxWidth:'100%'}}>
        <div style={{width:'33%'}}>
            <p>URL</p>
            <UrlField style={{ wordBreak:'break-all', textOverflow:'ellipsis'}} source="url" />
        </div>
        <div style={{width:'33%'}}>
            <p>Url GitHub</p>
            <UrlField style={{ wordBreak:'break-all', textOverflow:'ellipsis'}} source="gitUrl" />
        </div>
        <div style={{width:'33%'}}>
            <p>Url Img</p>
            <UrlField style={{ wordBreak:'break-all', textOverflow:'ellipsis'}} source="imgUrl" />
        </div>
    </div>
);


const list = (props) => {
    return (
        <List {...props} title="List of projects" actions={<ListActions/>}>
           <Datagrid expand={<PostPanel />} rowClick="edit">
                <TextField source="title" />
                <TextField source="description" />
           </Datagrid>
        </List>
    )
}


export default list;