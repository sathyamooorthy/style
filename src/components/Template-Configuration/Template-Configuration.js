import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

//Child Components
import TableData from "./TemplateTable";
import DataView from "./TemplateDataView";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(0.5),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});
const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const subtemplate = [
    {
        value: '123_NT_80_UITRE_Journal',
        label: '123_NT_80_UITRE_Journal',
    },
    {
        value: '123_NT_80_UITRE_Journal',
        label: '123_NT_80_UITRE_Journal',
    },
    {
        value: '123_NT_80_UITRE_Journal',
        label: '123_NT_80_UITRE_Journal',
    },
];

const cloneof = [
    {
        value: '123_NT_80_UITRE_Journal',
        label: '123_NT_80_UITRE_Journal',
    },
    {
        value: '123_NT_80_UITRE_Journal',
        label: '123_NT_80_UITRE_Journal',
    },
    {
        value: '123_NT_80_UITRE_Journal',
        label: '123_NT_80_UITRE_Journal',
    },
];

class TemplateConfiguration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PageViewDisplay: 'listview',
            setOpen: false,
        };
        this.onDataParse = this.onDataParse.bind(this);
        this.PageView = this.PageView.bind(this);
        this.handlerPopup = this.handlerPopup.bind(this)
    }
    componentDidMount() {
    }

    PageView(e, view) {
        e.preventDefault();
        let listCount = document.querySelectorAll('.page-header-option-list li').length;
        for (let i = 0; i < listCount; i++) {
            document.querySelectorAll('.page-header-option-list li')[i].classList.remove('active')
        }
        e.currentTarget.classList.add('active');
        this.setState({ PageViewDisplay: view });
    }

    onDataParse(e, valueData) {
        e.preventDefault();
        let listCount = document.querySelectorAll('.tab-filter li').length;
        for (let i = 0; i < listCount; i++) {
            document.querySelectorAll('.tab-filter li')[i].classList.remove('active')
        }
        e.currentTarget.classList.add('active');
    }
    handleClickOpen() {
        this.setState({ setOpen: true });
    };

    handleClose() {
        this.setState({ setOpen: false });
    };

    handlerPopup() {
        this.setState({ setOpen: true });
    }

    SearchBox(e){
        document.querySelector('.page-headers').classList.toggle('searchbox');
    }
    render() {
        let { PageViewDisplay } = this.state;
        return (
            <div>
                <div className="page-headers">
                    <div className="page-headers-inner">
                        <h1>List of Templates</h1>
                    </div>
                    <div className="page-header-option">
                        <ul className="page-header-option-list">
                            <li className="Option-search-area">
                                <button className="btn-buttons" onClick={(e) => this.SearchBox(e)}><Tooltip title="Search" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--24">
                                        <use href="#search-24"></use>
                                    </svg></Tooltip></button>
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
                            </li>
                            <li><button className="btn-buttons"><Tooltip title="Filter" placement="bottom">
                                <svg aria-hidden="true" focusable="false" className="icons--24">
                                    <use href="#filter-24"></use>
                                </svg></Tooltip></button></li>
                            <li className="active" onClick={(e) => this.PageView(e, 'listview')}><button className="btn-buttons"><Tooltip title="List View" placement="bottom">
                                <svg aria-hidden="true" focusable="false" className="icons--24">
                                    <use href="#listview-24"></use>
                                </svg>
                            </Tooltip></button></li>
                            <li onClick={(e) => this.PageView(e, 'gridview')}><button className="btn-buttons"><Tooltip title="Grid View" placement="bottom">
                                <svg aria-hidden="true" focusable="false" className="icons--24">
                                    <use href="#dataview-24"></use>
                                </svg>
                            </Tooltip></button></li>
                        </ul>
                    </div>
                </div>
                <div className="page-inners">
                    <ul className="tab-filter">
                        <li className="active" onClick={(e) => this.onDataParse(e, 'Recent')}>Recent</li>
                        <li onClick={(e) => this.onDataParse(e, 'Pinned')}>Pinned</li>
                        <li onClick={(e) => this.onDataParse(e, 'All Templates')}>All Templates</li>
                    </ul>
                    {PageViewDisplay === 'listview' ? <TableData handlerPopup={this.handlerPopup} onSetTab={this.onSetTab} /> : null}
                    {PageViewDisplay === 'gridview' ? <DataView handlerPopup={this.handlerPopup} /> : null}
                </div>
                <div className="add-icon-area">
                    <button onClick={this.handleClickOpen.bind(this)}><Tooltip title="Add Template" placement="bottom">
                        <svg aria-hidden="true" focusable="false" className="icons--18">
                            <use href="#add-24"></use>
                        </svg></Tooltip></button>
                </div>
                <div className="dialog-area">
                    <Dialog onClose={this.handleClose.bind(this)} aria-labelledby="customized-dialog-title" open={this.state.setOpen}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose.bind(this)}>
                            Add Template
                        </DialogTitle>
                        <DialogContent>
                            <form noValidate autoComplete="off">
                                <TextField
                                    label="Template Name"
                                    value="Journal of the American Medical"
                                    margin="normal"
                                />
                                <TextField
                                    select
                                    label="Sub Template of"
                                    SelectProps={{
                                        MenuProps: {
                                        },
                                    }}
                                    margin="normal"
                                >
                                    {subtemplate.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    select
                                    label="Clone of"
                                    SelectProps={{
                                        MenuProps: {
                                        },
                                    }}
                                    margin="normal"
                                >
                                    {cloneof.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={this.handleClose.bind(this)}>
                                Create
                            </Button>
                            <Button variant="contained" onClick={this.handleClose.bind(this)}>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            </div>
        );
    }
}
export default TemplateConfiguration;