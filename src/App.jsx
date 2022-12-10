import { Admin, Resource, EditGuesser } from "react-admin";

import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit } from "./user";
import { defaultTheme } from "react-admin";
import red from '@mui/material/colors/grey'
import green from '@mui/material/colors/green'

import { TransactionList, TransactionEdit } from './transaction'
const dataProvider = jsonServerProvider('https://crypto-tech-api.onrender.com');
// const dataProvider = jsonServerProvider('http://localhost:3000');
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
  <Admin theme={myTheme} dataProvider={dataProvider} >
    <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} recordRepresentation="name" />
    <Resource name="transactions" list={TransactionList} icon={TransactionIcon} edit={TransactionEdit} />
  </Admin >
);

export default App;