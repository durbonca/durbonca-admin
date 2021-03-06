// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';
import config from './utils/firebaseConfig';
import { projectList, projectEdit, projectCreate } from './resources/projects';
import { categoriesProjectsList, categoriesProjectsEdit, categoriesProjectsCreate } from './resources/categoriesProjects';

const options = { logging: true };

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
const App = () => (
<Admin dataProvider={dataProvider} authProvider={authProvider} >
  <Resource name="projects" list={projectList} edit={projectEdit} create={projectCreate}/>
  <Resource name="categoriesProjects" list={categoriesProjectsList} edit={categoriesProjectsEdit} create={categoriesProjectsCreate}/>
</Admin>
);

export default App;