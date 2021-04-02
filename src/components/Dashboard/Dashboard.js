import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core/";
// import { makeStyles } from "@material-ui/core/styles";
import HeaderDashboard from './../HeaderDashboard/HeaderDashboard';
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// const useStyles = makeStyles(theme => ({
//     root: {
//         justifyContent: "center",
//         marginTop: "100px"
//     },
//     loginContainer: {
//         margin: theme.spacing(8, 4),
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center"
//     },

// }));

const Dashboard = () => {
    const [user, setUser] = useState();
    const history = useHistory();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            setUser(loggedInUser);
        } else {
            history.push("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const handleLogout = () => {
    //     setUser("");
    //     localStorage.clear();
    //     history.push("/login");
    // };

    // const classes = useStyles();

    return (
        <>
            <HeaderDashboard />

            <Typography variant="h3" align="center" style={{ marginTop: "50px" }} component="h2">
                Welcome {user}!
            </Typography>
        </>
    );
};

export default Dashboard;
