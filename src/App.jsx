import { Admin, Resource, EditGuesser } from "react-admin";
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit } from "./user";
import { defaultTheme } from "react-admin";
import red from '@mui/material/colors/grey'
import green from '@mui/material/colors/green'

import { TransactionList, TransactionEdit } from './transaction'
const baseUrl = 'https://market-crypto-g5nd.onrender.com';
// const baseUrl ='https://quantum-api.onrender.com';
// const baseUrl = 'http://localhost:3000';
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const fetchJson = (url, options = {}) => {
  options.user = {
    authenticated: true,
    // use the token from local storage
    token: localStorage.getItem('username')
  };
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(baseUrl, fetchJson);
import UserIcon from "@mui/icons-material/PeopleOutline";
import TransactionIcon from "@mui/icons-material/AccountBalanceWallet";
// import TransactionIcon from "@mui/icons-material/AccountBalanceWallet";
const myTheme = {
  ...defaultTheme, palette: {
    primary: red,
    secondary: red,
  }
}
const App = () => (
  <Admin theme={myTheme} authProvider={authProvider} dataProvider={dataProvider} >
    <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} recordRepresentation="name" />
    <Resource name="transactions" list={TransactionList} icon={TransactionIcon} edit={TransactionEdit} />
  </Admin >
);

export default App;