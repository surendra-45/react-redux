import React from 'react';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { connect } from 'react-redux';
import { handleChangeEmail, handleChangePassword, userData } from './Actions/action'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginTab extends React.Component {
    
    handleChange = (event) => {
        this.props.handleChange({ "email": event.target.value })
    }
    handleChangePwd = (event) => {
        this.props.handleChangePassword({ "password": event.target.value })
    }
    loginSubmit = ()=>{
        let users = {
            user: [{
                "id": 1,
                "name": "test1",
                "age": "11",
                "gender": "male",
                "email": "test1@gmail.com",
                "phoneNo": "9415346313"
            },
            {
                "id": 2,
                "name": "test2",
                "age": "12",
                "gender": "male",
                "email": "test2@gmail.com",
                "phoneNo": "9415346314"
            },
            {
                "id": 3,
                "name": "test3",

                "age": "13",
                "gender": "male",
                "email": "test3@gmail.com",
                "phoneNo": "9415346315"
            },
            {
                "id": 4,
                "name": "test4",
                "age": "14",
                "gender": "male",
                "email": "test4@gmail.com",
                "phoneNo": "9415346316"
            },
            {
                "id": 5,
                "name": "test5",
                "age": "15",
                "gender": "male",
                "email": "test5@gmail.com",
                "phoneNo": "9415346317"
            },
            {
                "id": 6,
                "name": "test6",
                "age": "16",
                "gender": "male",
                "email": "test6@gmail.com",
                "phoneNo": "9415346318"
            }
            ]
        }
        const {loginData} = this.props
        if(loginData.email.email === 'hruday@gmail.com' && loginData.password.password === 'hruday123'){
            this.props.history.push('/empData')
            this.props.userData(users)
        }else {
            alert('please give valid credentials')
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="email" fullWidth required onChange={this.handleChange}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" type="password" fullWidth required onChange={this.handleChangePwd}/>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={this.loginSubmit}>Login</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    loginData: state.login
})

const mapDispatchToProps = dispatch => ({
    handleChange: (event) => dispatch(handleChangeEmail(event)),
    handleChangePassword: (event) => dispatch(handleChangePassword(event)),
    userData :(usersData) => dispatch(userData(usersData))
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginTab))