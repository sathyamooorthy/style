import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import './scss/app.scss';
import history from './components/History/history';
import Skeleton from 'react-loading-skeleton';

/** Route include **/
import TemplateConfiguration from './components/Template-Configuration/Template-Configuration';
import Reviewer from './components/Reviewer/Reviewer';
import UserConfiguration from './components/User-Configuration/User-Configuration';
import TemplateMapping from './components/Template-Mapping/Template-Mapping';

function WindowSize() {
    var w = window.innerWidth;
    if (w < 780) {
        document.querySelector('.navigation').classList.add('mobile-nav');
        document.querySelector('.container-body').classList.add('mobile-nav');
    }
    else {
        if (document.querySelector('.mobile-nav')) {
            document.querySelector('.navigation').classList.remove('mobile-nav');
            document.querySelector('.container-body').classList.remove('mobile-nav');
        }
    }
}

window.onresize = function (event) {
    var w = window.innerWidth;
    if (w < 780) {
        if (document.querySelector('.navigation')) {
            document.querySelector('.navigation').classList.add('mobile-nav');
            document.querySelector('.container-body').classList.add('mobile-nav');
        }
    }
    else {
        if (document.querySelector('.mobile-nav')) {
            document.querySelector('.navigation').classList.remove('mobile-nav');
            document.querySelector('.container-body').classList.remove('mobile-nav');
        }
    }
};

window.addEventListener('click', function (e) {
    if (document.querySelector('.header-profile-btn') !== null) {
        if (document.querySelector('.header-profile-btn').contains(e.target)) {

        } else {
            document.querySelector('.profile-area').classList.remove('active');
        }
    }
});

class AppPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skeleton: false
        };
    }

    componentDidMount() {
        //setTimeout(alert('01'),this.setState({skeleton:false}), 5000);
        WindowSize();

    }

    onMenuToggle(e) {
        document.querySelector('.navigation').classList.toggle('mobile-nav');
        document.querySelector('.container-body').classList.toggle('mobile-nav');
        //document.querySelector('.side-bar-left-outer').classList.toggle('mobile-nav');
    }

    profileDetails() {
        document.querySelector('.profile-area').classList.toggle('active');
    }

    onMenuToggleMobile(e) {
       // document.querySelector('.navigation').classList.add('mobile-nav');
    }

    render() {
        let { skeleton } = this.state;
        return (
            <Router>
                <div className="root-content">
                    <div className="header-area">
                        <div className="header-left-icon">
                            <Tooltip title="Menu" placement="bottom" onClick={(e) => this.onMenuToggle(e)}>
                                <svg aria-hidden="true" focusable="false" className="icons--24">
                                    <use href="#menu-24"></use>
                                </svg></Tooltip>
                        </div>
                        <div className="header-right">
                            <h1>Style Manager</h1>
                            <Button className="header-profile-btn" onClick={this.profileDetails.bind(this)}>
                                GK
                            </Button>
                            <div className="profile-area">
                                <ul>
                                    <li className="profile-details">
                                        <Tooltip title="User" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--18">
                                                <use href="#person-24"></use>
                                            </svg></Tooltip>
                                        Is6589
                                    </li>
                                    <li><Button onClick={() => { this.props.history.push('/') }}>
                                        <Tooltip title="Logout" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--18">
                                                <use href="#power-24"></use>
                                            </svg></Tooltip>
                                        Logout
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="body-container-area">
                        <div className="side-bar-left navigation">
                            {skeleton === true ? <div className="Skeleton-area">
                                <Skeleton height={40} count={8} />
                            </div> : null}
                            <div className="navigation-search-button">
                                <Input
                                    id=""
                                    placeholder="search"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#search-24"></use>
                                            </svg>
                                        </InputAdornment>
                                    }
                                />
                                {/* <div className="search-button-input">
                                    <svg aria-hidden="true" focusable="false" className="icons--24">
                                        <use href="#search-24"></use>
                                    </svg>
                                    <input className="input-field" type="text" placeholder="Search menu" name="" />
                                </div> */}
                            </div>
                            {skeleton === false ? <div className="navigation-one">
                                <h2>MAIN</h2>
                                <ul className="menu-links">
                                    <li><NavLink to='/Template-Configuration' onClick={(e) => this.onMenuToggleMobile(e)}>
                                        <Tooltip title="Template Configuration" placement="right">
                                            <svg aria-hidden="true" focusable="false" className="icons--18">
                                                <use href="#dashboard-24"></use>
                                            </svg></Tooltip>
                                        <span className="menu-name">Template Configuration</span></NavLink></li>
                                    <li><NavLink to='/TemplateMapping' onClick={(e) => this.onMenuToggleMobile(e)}>
                                        <Tooltip title="Template Mapping" placement="right">
                                            <svg aria-hidden="true" focusable="false" className="icons--18">
                                                <use href="#map-24"></use>
                                            </svg></Tooltip>
                                        <span className="menu-name">Template Mapping</span></NavLink></li>
                                    <li><NavLink to='/UserConfiguration' onClick={(e) => this.onMenuToggleMobile(e)}>
                                        <Tooltip title="User Configuration" placement="right">
                                            <svg aria-hidden="true" focusable="false" className="icons--18">
                                                <use href="#person-24"></use>
                                            </svg></Tooltip>
                                        <span className="menu-name">User Configuration</span></NavLink></li>
                                </ul>
                            </div> : null}
                            {skeleton === false ? <div className="navigation-two">
                                <h2>OTHERS</h2>
                                <ul className="menu-links">
                                    <li><NavLink to='/#' onClick={(e) => this.onMenuToggleMobile(e)}>
                                        <Tooltip title="Settings" placement="right">
                                            <svg aria-hidden="true" focusable="false" className="icons--18">
                                                <use href="#userverfication-24"></use>
                                            </svg></Tooltip>
                                        <span className="menu-name">Settings</span>
                                    </NavLink></li>
                                    <li><NavLink to='/#' onClick={(e) => this.onMenuToggleMobile(e)}>
                                        <Tooltip title="About" placement="right">
                                            <svg aria-hidden="true" focusable="false" className="icons--18">
                                                <use href="#person-24"></use>
                                            </svg></Tooltip>
                                        <span className="menu-name">About</span></NavLink></li>
                                    <li><NavLink to='/#' onClick={(e) => this.onMenuToggleMobile(e)}>
                                        <Tooltip title="Help" placement="right">
                                            <svg aria-hidden="true" focusable="false" className="icons--18">
                                                <use href="#help-24"></use>
                                            </svg></Tooltip>
                                        <span className="menu-name">Help</span></NavLink></li>
                                </ul>
                            </div> : null}
                        </div>
                        <div className="container-body">
                            <Route path="/Template-Configuration" component={TemplateConfiguration} />
                            <Route path="/Reviewer" component={Reviewer} />
                            <Route path="/UserConfiguration" component={UserConfiguration} />
                            <Route path="/TemplateMapping" component={TemplateMapping} />


                            {/* <div className="row footer-area">
                                <div className="col-6">footer</div>
                                <div className="col-6">footer</div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </Router>
            // </BrowserRouter>
        );
    }
}
export default AppPage;