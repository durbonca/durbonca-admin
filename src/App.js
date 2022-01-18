// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';
import config from './utils/firebaseConfig';

const options = { logging: true };

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
const App = () => (
<Admin dataProvider={dataProvider} authProvider={authProvider} >
  <Resource name="projects" list={ListGuesser} />
</Admin>
);

export default App;