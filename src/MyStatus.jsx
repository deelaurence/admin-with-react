// import { useRecordContext } from "react-admin";
import './App.css'
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import Check from "@mui/icons-material/Check";
import Pending from "@mui/icons-material/PendingActions";

const MyStatusField = ({ source }) => {
    // console.log(record[source])
    const record = useRecordContext();
    return record ? (
        <h3  className={`${record[source] == 'approved' ? 'green' : 'yellow'}`}>
            {record[source]}
            {record[source] == 'approved' ? < Check sx={{ fontSize: 15, ml: 1 }} /> : < Pending sx={{ fontSize: 15, ml: 1 }} />}

        </h3 >
    ) : null;
};

export default MyStatusField;