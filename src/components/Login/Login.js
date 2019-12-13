import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/icon'
import TextField from '@material-ui/core/TextField';
import { InputAdornment, withStyles } from '@material-ui/core';
import { RemoveRedEye } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import history from '../History/history';

import './login.scss';
import LoginImg from "../../assets/Images/login.png";


const styles = theme => ({
    eye: {
        cursor: 'pointer',
        color: '#b9b9b9'
    },
});

class PasswordInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordIsMasked: true,
        };
    }

    togglePasswordMask() {
        this.setState(prevState => ({
            passwordIsMasked: !prevState.passwordIsMasked,
        }));
    };

    render() {
        const { classes } = this.props;
        const { passwordIsMasked } = this.state;

        return (
            <TextField
                type={passwordIsMasked ? 'password' : 'text'}
                {...this.props}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <RemoveRedEye
                                className={classes.eye}
                                onClick={this.togglePasswordMask.bind(this)}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
}

PasswordInput.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
};

PasswordInput = withStyles(styles)(PasswordInput);


class LoginApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            checkRemember:false,
            FormViewDisplay: 'Login',
        };
        this.FormView = this.FormView.bind(this);
    }

    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleChange(event){
        this.setState({ checkRemember: event.target.checked });
    };
    
    FormView(e,FormList){
        this.setState({ FormViewDisplay: FormList });
    };

    render() {
        const { password, checkRemember, FormViewDisplay} = this.state;

        return (
            <div className="Login-area">
                <div className="split left">
                    <div className="center-area">
                        <img src={LoginImg} className="img-fluid" />
                    </div>
                </div>
                <div className="split right">
                    <div className="center-area">
                        <div className="login-head">
                            <Icon>dashboard</Icon> <h1>Style Manager</h1>
                        </div>
                        <div className="login-welcome-area">
                            <h2>Welcome to Sign In</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry’s.</p>
                           {FormViewDisplay === 'Login' ? <form noValidate autoComplete="off">
                                <div className="textfield-area">
                                    <Icon>mail_outline</Icon>
                                    <TextField
                                        label="Email Address"
                                        margin="normal"
                                    />
                                </div>
                                <div className="password-area">
                                    <Icon>lock</Icon>
                                    <PasswordInput
                                        label="Password"
                                        name="password"
                                        value={password}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="Remember-area">
                                    <FormControlLabel
                                        control={<Checkbox checked={checkRemember} color="primary" onChange={this.handleChange.bind(this)} value="checkRemember" />}
                                        label="Remember Me"
                                    />
                                    <Button className="forget-btn" onClick={(e) => this.FormView(e, 'Forget')}> Forget Password</Button>
                                </div>
                                <div className="login-button-area">
                                    <Button variant="contained" color="primary" className="save-btn" onClick={() => {this.props.history.push('App#/Template-Configuration') }}>
                                        SIGN IN
                                    </Button>
                                    <Button variant="contained" className="cancel-btn">
                                        CANCEL
                                    </Button>
                                </div>
                            </form> : null }
                            {FormViewDisplay === 'Forget' ? <form noValidate autoComplete="off">
                                <div className="textfield-area">
                                    <Icon>mail_outline</Icon>
                                    <TextField
                                        label="Email Address"
                                        margin="normal"
                                    />
                                </div>
                                <div className="login-button-area">
                                    <Button variant="contained" color="primary" className="save-btn" onClick={(e) => this.FormView(e, 'Login')}>
                                        SUBMIT
                                    </Button>
                                    <Button variant="contained" className="cancel-btn" onClick={(e) => this.FormView(e, 'Login')}>
                                        CANCEL
                                    </Button>
                                </div>
                            </form> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginApp;