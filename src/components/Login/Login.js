import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from './../Header/Header';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Grid, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: "center",
        marginTop: "100px"
    },
    loginContainer: {
        margin: theme.spacing(4, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: theme.spacing(1.5, 0)
    }
}));

const Login = () => {
    const [formValues, setformValues] = useState({
        username: "",
        password: ""
    });
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // store the user in localStorage
        if (formValues.username && formValues.password) {
            localStorage.setItem("user", formValues.username);
            history.push("/dashboard");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
    };

    const classes = useStyles();

    return (
        <>
            <Header />
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12} sm={8} md={6} lg={4} component={Paper} elevation={6} square>
                    <div className={classes.loginContainer}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                    </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                value={formValues.username}
                                label="User Name"
                                name="username"
                                autoComplete="off"
                                onChange={handleChange}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={formValues.password}
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                </Link>
                                </Grid>
                                {/* <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid> */}
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;
