import 'date-fns';
import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button } from '@material-ui/core';

class TemplateConfiguration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setSelectedDate: 'null',
        };
        //this.setSelectedDate=this.setSelectedDate.bind(this)

    }
    componentDidMount() {
    }

    /** Accordion Start **/
    accordion(e) {
        // let accordionCount = document.querySelectorAll('.Timeline-Area-inner').length;
        // for (let i = 0; i < accordionCount; i++) {
        //     document.querySelectorAll('.Timeline-Area-inner')[i].classList.remove('active')
        // }
        e.currentTarget.parentNode.classList.toggle('active');
    }
    /** Accordion End **/

    handleDateChange(date) {
        this.setState({
            setSelectedDate: date
        })
        // console.log(date);
    }
    render() {
        let { setSelectedDate } = this.state;
        return (
            <div>
                <div className="page-headers">
                    <div className="page-headers-inner">
                        <button onClick={() => { this.props.history.push('Template-Configuration') }}><Tooltip title="Back" placement="bottom">
                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                <use href="#back-24"></use>
                            </svg></Tooltip></button><h1>GLD_24_Integra_VIT</h1>
                    </div>
                    <div className="page-header-option">
                        <ul className="page-header-option-list">
                            <li>
                                <Input
                                    id="input-with-icon-adornment"
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
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        // label="Date picker inline"
                                        value={setSelectedDate}
                                        onChange={this.handleDateChange.bind(this)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        placeholder="Sort By Date"
                                    />
                                </MuiPickersUtilsProvider>
                            </li>
                            <li>
                                <button className="btn-buttons" style={{ marginTop: "0px" }}> <Tooltip title="Sort" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--24">
                                        <use href="#sort-24"></use>
                                    </svg></Tooltip>
                                </button>
                            </li>
                            <li className="export-oprion-area">
                                <button className="btn-buttons">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#export-24"></use>
                                    </svg>
                                    Export
                                    </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Timeline-Area">
                    <ul className="Timeline-list">
                        <li>
                            <div className="version-header">Version 4.0</div>
                        </li>
                        <li>
                            <div className="Timeline-Area-inner active">
                                <div className="Timeline-Area-inner-head" onClick={(e) => this.accordion(e)}>
                                    <ul className="Timeline-Area-inner-list">
                                        <li><div className="Timeline-Tag">GK</div></li>
                                        <li>12:47 am</li>
                                        <li>Last updated <strong>10-10-2019</strong> by <strong>Gracelyn Kason</strong></li>
                                        <li><div className="Timeline-Tag-new">new</div></li>
                                    </ul>
                                    <div className="Timeline-Area-Icons">
                                        <Tooltip title="Expand More" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandmore-24"></use>
                                            </svg></Tooltip>
                                        <Tooltip title="Expand Less" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandless-24"></use>
                                            </svg></Tooltip>
                                    </div>
                                </div>
                                <div className="Timeline-Area-inner-content">
                                    <ul className="Timeline-Area-inner-content-list">
                                        <li>
                                            <strong>Front Matter</strong>
                                            <ul>
                                                <li><strong>Main Title</strong>
                                                    <ul>
                                                        <li> Case: Regular to Case: Bold</li>
                                                    </ul>
                                                </li>
                                                <li><strong>FM Author</strong>
                                                    <ul>
                                                        <li> Surname: Mandatory to Surname: Not Mandatory</li>
                                                        <li> Add Comma: before to Add Comma: after</li>
                                                        <li> Add Semicolon: before to Add Semicolon: after</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Timeline-Area-inner">
                                <div className="Timeline-Area-inner-head" onClick={(e) => this.accordion(e)}>
                                    <ul className="Timeline-Area-inner-list">
                                        <li><div className="Timeline-Tag">NS</div></li>
                                        <li>10:30 am</li>
                                        <li>Last updated <strong>10-10-2019</strong> by <strong>Nonroe Shasha</strong></li>
                                        <li><div className="Timeline-Tag-new">new</div></li>
                                    </ul>
                                    <div className="Timeline-Area-Icons">
                                        <Tooltip title="Expand More" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandmore-24"></use>
                                            </svg></Tooltip>
                                        <Tooltip title="Expand Less" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandless-24"></use>
                                            </svg></Tooltip>
                                    </div>
                                </div>
                                <div className="Timeline-Area-inner-content">
                                    <ul className="Timeline-Area-inner-content-list">
                                        <li>
                                            <strong>Front Matter</strong>
                                            <ul>
                                                <li><strong>Main Title</strong>
                                                    <ul>
                                                        <li> Case: Regular to Case: Bold</li>
                                                    </ul>
                                                </li>
                                                <li><strong>FM Author</strong>
                                                    <ul>
                                                        <li> Surname: Mandatory to Surname: Not Mandatory</li>
                                                        <li> Add Comma: before to Add Comma: after</li>
                                                        <li> Add Semicolon: before to Add Semicolon: after</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Timeline-Area-inner">
                                <div className="Timeline-Area-inner-head" onClick={(e) => this.accordion(e)}>
                                    <ul className="Timeline-Area-inner-list">
                                        <li><div className="Timeline-Tag">GG</div></li>
                                        <li>04:30 pm</li>
                                        <li>Last updated <strong>10-9-2019</strong> by <strong>Grace Gross</strong></li>
                                        <li><div className="Timeline-Tag-new">new</div></li>
                                    </ul>
                                    <div className="Timeline-Area-Icons">
                                        <Tooltip title="Expand More" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandmore-24"></use>
                                            </svg></Tooltip>
                                        <Tooltip title="Expand Less" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandless-24"></use>
                                            </svg></Tooltip>
                                    </div>
                                </div>
                                <div className="Timeline-Area-inner-content">
                                    <ul className="Timeline-Area-inner-content-list">
                                        <li>
                                            <strong>Front Matter</strong>
                                            <ul>
                                                <li><strong>Main Title</strong>
                                                    <ul>
                                                        <li> Case: Regular to Case: Bold</li>
                                                    </ul>
                                                </li>
                                                <li><strong>FM Author</strong>
                                                    <ul>
                                                        <li> Surname: Mandatory to Surname: Not Mandatory</li>
                                                        <li> Add Comma: before to Add Comma: after</li>
                                                        <li> Add Semicolon: before to Add Semicolon: after</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="Timeline-list">
                        <li>
                            <div className="version-header">Version 3.0</div>
                        </li>
                        <li>
                            <div className="Timeline-Area-inner">
                                <div className="Timeline-Area-inner-head" onClick={(e) => this.accordion(e)}>
                                    <ul className="Timeline-Area-inner-list">
                                        <li><div className="Timeline-Tag">GK</div></li>
                                        <li>12:47 am</li>
                                        <li>Last updated <strong>10-10-2019</strong> by <strong>Gracelyn Kason</strong></li>
                                    </ul>
                                    <div className="Timeline-Area-Icons">
                                        <Tooltip title="Expand More" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandmore-24"></use>
                                            </svg></Tooltip>
                                        <Tooltip title="Expand Less" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandless-24"></use>
                                            </svg></Tooltip>
                                    </div>
                                </div>
                                <div className="Timeline-Area-inner-content">
                                    <ul className="Timeline-Area-inner-content-list">
                                        <li>
                                            <strong>Front Matter</strong>
                                            <ul>
                                                <li><strong>Main Title</strong>
                                                    <ul>
                                                        <li> Case: Regular to Case: Bold</li>
                                                    </ul>
                                                </li>
                                                <li><strong>FM Author</strong>
                                                    <ul>
                                                        <li> Surname: Mandatory to Surname: Not Mandatory</li>
                                                        <li> Add Comma: before to Add Comma: after</li>
                                                        <li> Add Semicolon: before to Add Semicolon: after</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Timeline-Area-inner">
                                <div className="Timeline-Area-inner-head" onClick={(e) => this.accordion(e)}>
                                    <ul className="Timeline-Area-inner-list">
                                        <li><div className="Timeline-Tag">NS</div></li>
                                        <li>10:30 am</li>
                                        <li>Last updated <strong>10-10-2019</strong> by <strong>Nonroe Shasha</strong></li>
                                    </ul>
                                    <div className="Timeline-Area-Icons">
                                        <Tooltip title="Expand More" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandmore-24"></use>
                                            </svg></Tooltip>
                                        <Tooltip title="Expand Less" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandless-24"></use>
                                            </svg></Tooltip>
                                    </div>
                                </div>
                                <div className="Timeline-Area-inner-content">
                                    <ul className="Timeline-Area-inner-content-list">
                                        <li>
                                            <strong>Front Matter</strong>
                                            <ul>
                                                <li><strong>Main Title</strong>
                                                    <ul>
                                                        <li> Case: Regular to Case: Bold</li>
                                                    </ul>
                                                </li>
                                                <li><strong>FM Author</strong>
                                                    <ul>
                                                        <li> Surname: Mandatory to Surname: Not Mandatory</li>
                                                        <li> Add Comma: before to Add Comma: after</li>
                                                        <li> Add Semicolon: before to Add Semicolon: after</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="Timeline-Area-inner">
                                <div className="Timeline-Area-inner-head" onClick={(e) => this.accordion(e)}>
                                    <ul className="Timeline-Area-inner-list">
                                        <li><div className="Timeline-Tag">GG</div></li>
                                        <li>04:30 pm</li>
                                        <li>Last updated <strong>10-9-2019</strong> by <strong>Grace Gross</strong></li>
                                    </ul>
                                    <div className="Timeline-Area-Icons">
                                        <Tooltip title="Expand More" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandmore-24"></use>
                                            </svg></Tooltip>
                                        <Tooltip title="Expand Less" placement="bottom">
                                            <svg aria-hidden="true" focusable="false" className="icons--24">
                                                <use href="#expandless-24"></use>
                                            </svg></Tooltip>
                                    </div>
                                </div>
                                <div className="Timeline-Area-inner-content">
                                    <ul className="Timeline-Area-inner-content-list">
                                        <li>
                                            <strong>Front Matter</strong>
                                            <ul>
                                                <li><strong>Main Title</strong>
                                                    <ul>
                                                        <li> Case: Regular to Case: Bold</li>
                                                    </ul>
                                                </li>
                                                <li><strong>FM Author</strong>
                                                    <ul>
                                                        <li> Surname: Mandatory to Surname: Not Mandatory</li>
                                                        <li> Add Comma: before to Add Comma: after</li>
                                                        <li> Add Semicolon: before to Add Semicolon: after</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="Timeline-more-area">
                    <Button>click here to Show more revisions</Button>
                </div>
            </div>
        );
    }
}
export default TemplateConfiguration;