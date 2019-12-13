import React from "react";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

function createData(employeename, isnumber, divisionunit, client, division, role) {
    return { employeename, isnumber, divisionunit, client, division, role };
}

const rows = [
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
    createData("Sarah Steiner", "IS8868", "Editorial Services", "T and F", "Philadelphia", "Project Manager"),
    createData("Carys Metz", "IS4790", "Editorial Services", "T and F", "Miltonpark", "Project Lead"),
];

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === "desc"
        ? (a, b) => desc(a, b, orderBy)
        : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
    { id: "employeename", label: "Employee Name", minWidth: 150 },
    { id: "isnumber", label: "IS Number", minWidth: 150 },
    { id: "divisionunit", label: "Division Unit", minWidth: 150 },
    { id: "client", label: "Client", minWidth: 150 },
    { id: "division", label: "division", minWidth: 150 },
    { id: "role", label: "Role", minWidth: 150 },
    { id: "action", label: "Action", minWidth: 150 }
];

function EnhancedTableHead(props) {
    const {
        classes,
        order,
        orderBy,
        onRequestSort
    } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        padding={headCell.disablePadding ? "none" : "default"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={order}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    paper: {
        width: "100%",
    },
    tableWrapper: {
        overflow: 'auto',
        maxHeight: '60vh',
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1
    }
}));

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [state, setState] = React.useState({ action: '' });

    function handleRequestSort(event, property) {
        const isDesc = orderBy === property && order === "desc";
        setOrder(isDesc ? "asc" : "desc");
        setOrderBy(property);
    }

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    function handleChange(event) {
        setState({
            ...state, action: event.target.value,
        });
    };

    function SearchBox() {
        document.querySelector('.page-headers').classList.toggle('searchbox');
    }

    return (
        <div>
            <div className="page-headers">

                <div className="page-headers-inner"><h1>User Configuration</h1>
                </div>
                <div className="page-header-option">
                    <ul className="page-header-option-list">
                        <li className="Option-search-area">
                            <button className="btn-buttons" onClick={SearchBox}><Tooltip title="Search" placement="bottom">
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
                        <li>
                            <button className="btn-buttons"><Tooltip title="Filter" placement="bottom">
                                <svg aria-hidden="true" focusable="false" className="icons--24">
                                    <use href="#filter-24"></use>
                                </svg></Tooltip></button>
                        </li>
                        <li className="button-area">
                            <Button variant="contained" id="cancelButton">
                                Edit
                                </Button>
                            <Button variant="contained" color="primary" id="saveButton">
                                Save Changes
                                </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="page-inners">
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <div className={classes.tableWrapper}>
                            <Table stickyHeader className={classes.table} aria-labelledby="tableTitle">
                                <EnhancedTableHead
                                    classes={classes}
                                    order={order}
                                    orderBy={orderBy}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                <TableBody>
                                    {stableSort(rows, getSorting(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                >
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.employeename}
                                                    </TableCell>
                                                    <TableCell>{row.isnumber}</TableCell>
                                                    <TableCell>{row.divisionunit}</TableCell>
                                                    <TableCell>{row.client}</TableCell>
                                                    <TableCell>{row.division}</TableCell>
                                                    <TableCell>{row.role}</TableCell>
                                                    <TableCell className="select-option-area">
                                                        <FormControl>
                                                            <Select
                                                                value={state.action}
                                                                onChange={handleChange}
                                                                name="action"
                                                            >
                                                                <MenuItem value="Modify">Modify</MenuItem>
                                                                <MenuItem value="Read">Read</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </div>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                "aria-label": "previous page"
                            }}
                            nextIconButtonProps={{
                                "aria-label": "next page"
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div >
            </div>
        </div>
    );
}
