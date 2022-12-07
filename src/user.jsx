import { useMediaQuery } from "@mui/material";
import { List, Edit, SimpleForm, SimpleList, TextInput, Datagrid, TextField, SaveButton, Toolbar, EmailField, NumberInput } from "react-admin";

import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import { useEffect, useState } from "react";
import MyNameField from "./MyNameField";
export const UserList = () => {
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
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.zipCode}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="edit">
                    {/* <TextField source="id" /> */}
                    {/* <TextField source="name" /> */}
                    <MyNameField source="name" />
                    <TextField source="email" />
                    <TextField source="address" />
                    <TextField source="tradeProfit" />
                </Datagrid>
            )}
        </List>
    );
};

export const UserEdit = () => {
    return (

        <Edit>
            <SimpleForm>
                {/* <ReferenceInput source="transaction.status" reference="transactions" /> */}
                <NumberInput source="tradeProfit" />
                <NumberInput source="referralBonus" />
                <NumberInput source="totalEquity" />
                <TextInput disabled source="pendBalance" />
                <TextInput disabled source="totalDeposit" />
                <TextInput disabled source="name" />
                <TextInput disabled source="email" />
                <TextInput disabled source="address" />
            </SimpleForm>


        </Edit>
    );
};