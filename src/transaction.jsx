import { useMediaQuery } from "@mui/material";
import {
    List,
    Datagrid,
    TextField,
    SimpleList,
    EmailField,
    ReferenceField,
    EditButton,
    Edit,
    SortButton,
    SimpleForm,
    ReferenceInput,
    TextInput,
} from "react-admin";
// import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin"
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import MyStatus from "./MyStatus"
import { useEffect, useState } from "react";
export const TransactionList = () => {
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth
    })
    const [isSmall, setIsSmall] = React.useState(false)
    React.useEffect(() => {
        function handleResize() {
            setDimensions({ width: window.innerWidth })
            if (window.innerWidth < 400) {
                setIsSmall(true)
            }
        }
        window.addEventListener('resize', handleResize)
    })
    const postFilters = [
        <TextInput source="q" label="Search" alwaysOn />,
        <ReferenceInput source="userId" label="User" reference="users" />,
    ];

    // export const PostList = () => (
    //     <List filters={postFilters}>
    //     // ...
    //     </List>
    // );

    return (

        <List filters={postFilters}>
            {isSmall ? (

                <>
                    <MyStatus source='status' />
                    <SimpleList

                        primaryText={(record) => record.owner.email}
                        secondaryText={(record) => record.amount}
                        tertiaryText={(record) => record.status}
                    />
                </>

            ) : (
                <Datagrid rowClick="edit">

                    <TextField source="owner.name" />
                    <TextField source="amount" />
                    {/* <TextField source="status" /> */}
                    <MyStatus source='status' />

                </Datagrid>
            )}

        </List>
    );
};
export const TransactionEdit = () => {
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth
    })
    const [isSmall, setIsSmall] = React.useState(false)
    React.useEffect(() => {
        function handleResize() {
            setDimensions({ width: window.innerWidth })
            if (window.innerWidth < 400) {
                setIsSmall(true)
            }
        }
        window.addEventListener('resize', handleResize)
    })
    return (

        <Edit>
            <SimpleForm>
                {/* <ReferenceInput source="transaction.status" reference="transactions" /> */}
                <TextInput source="status" />
                <p>Spelling must match with either (pending-failed-approved)</p>
                <TextInput disabled source="amount" />
                <TextInput disabled source="owner.name" />
                <TextInput disabled source="owner.pendBalance" />
            </SimpleForm>


        </Edit>
    );
};