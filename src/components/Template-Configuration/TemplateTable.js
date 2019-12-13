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
import Skeleton from 'react-loading-skeleton';

function createData(templatelist, lastmodified, revision, action) {
    return { templatelist, lastmodified, revision, action };
}

const rows = [
    createData("Journal of the American Medical", "12 min ago by Richerd Montique", "12"),
    createData("1254_INT_90_UITRE_INT", "3 days ago by John Doe", "24"),
    createData("Journal of the American Medical", "12 min ago by Richerd Montique", "12"),
    createData("1254_INT_90_UITRE_INT", "3 days ago by John Doe", "24"),
    createData("Journal of the American Medical", "12 min ago by Richerd Montique", "12"),
    createData("1254_INT_90_UITRE_INT", "3 days ago by John Doe", "24"),
    createData("Journal of the American Medical", "12 min ago by Richerd Montique", "12"),
    createData("1254_INT_90_UITRE_INT", "3 days ago by John Doe", "24"),
    createData("Journal of the American Medical", "12 min ago by Richerd Montique", "12"),
    createData("1254_INT_90_UITRE_INT", "3 days ago by John Doe", "24"),
    createData("Journal of the American Medical", "12 min ago by Richerd Montique", "12"),
    createData("1254_INT_90_UITRE_INT", "3 days ago by John Doe", "24"),
    createData("Journal of the American Medical", "12 min ago by Richerd Montique", "12"),
    createData("1254_INT_90_UITRE_INT", "3 days ago by John Doe", "24"),
    createData("Journal of the American Medical", "12 min ago by Richerd Montique", "12"),
    createData("1254_INT_90_UITRE_INT", "3 days ago by John Doe", "24")
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
    { id: "templatelist", label: "templatelist", minWidth: 150 },
    { id: "lastmodified", label: "Last Modified", minWidth: 150 },
    { id: "revision", label: "Revision", minWidth: 80 },
    { id: "action", label: "Action", minWidth: 200 }
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
                <TableCell style={{ minWidth: 35 }} />
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

export default function EnhancedTable(props) {
    const _props = props.handlerPopup;
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    function handleRequestSort(event, property) {
        const isDesc = orderBy === property && order === "desc";
        setOrder(isDesc ? "asc" : "desc");
        setOrderBy(property);
    }

    function handlePopupWindow() {
        _props()
    }

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }


    function pinned(e) {
        e.currentTarget.classList.toggle('active');
    }
    return (
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
                                            <TableCell className="template-icons">
                                                <div><span>T</span></div>
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.templatelist}
                                            </TableCell>
                                            <TableCell>{row.lastmodified}</TableCell>
                                            <TableCell><a href="#/Reviewer">{row.revision}</a></TableCell>
                                            <TableCell className="icon-tb-area">
                                                <button className="pined-area" onClick={pinned}><Tooltip title="UnPinned" placement="bottom">
                                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                                        <use href="#star-24"></use>
                                                    </svg>
                                                </Tooltip>
                                                    <Tooltip title="Pinned" placement="bottom">
                                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                                            <use href="#starfull-24"></use>
                                                        </svg>
                                                    </Tooltip></button>
                                                <button onClick={handlePopupWindow}><Tooltip title="Clone" placement="bottom">
                                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                                        <use href="#clone-24"></use>
                                                    </svg></Tooltip></button>
                                                <button><Tooltip title="Edit" placement="bottom">
                                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                                        <use href="#edit-24"></use>
                                                    </svg></Tooltip></button>
                                                <button><Tooltip title="Delete" placement="bottom">
                                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                                        <use href="#delete-24"></use>
                                                    </svg></Tooltip></button>
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
    );
}
