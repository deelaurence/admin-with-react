import { Admin, Resource, EditGuesser } from "react-admin";

import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./user";
import { TransactionList, TransactionEdit } from './transaction'
// const dataProvider = jsonServerProvider('https://crypto-tech-api.onrender.com');
const dataProvider = jsonServerProvider('http://localhost:3000');
import TransactionIcon from "@mui/icons-material/AccountBalanceWallet";
import UserIcon from "@mui/icons-material/PeopleOutline";
const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
    <Resource name="transactions" list={TransactionList} icon={TransactionIcon} edit={TransactionEdit} />
  </Admin >
);

export default App;