import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";


const theme = createMuiTheme();

class TemplateDataView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0
        };

    }

    handleClick(offset) {
        this.setState({ offset });
    }
    
    pinned(e) {
        e.currentTarget.classList.toggle('active');
    }
    render() {
        return (
            <div className="dataview-area-main">
                <div className="dataview-area">
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a>
                            </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li> <button onClick={this.props.handlerPopup}><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area"> <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                <svg aria-hidden="true" focusable="false" className="icons--18">
                                    <use href="#history-24"></use>
                                </svg></Tooltip> 48
                                </a></div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li> <button onClick={this.props.handlerPopup}><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a> </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area"> <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                <svg aria-hidden="true" focusable="false" className="icons--18">
                                    <use href="#history-24"></use>
                                </svg></Tooltip> 48
                                </a></div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a> </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a>
                            </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a>
                            </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a>
                            </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a>
                            </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a>
                            </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a>
                            </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dataview-area-column">
                        <div className="template-icons-symbol"><span>T</span></div>
                        <Tooltip title="Sample Journalism" placement="bottom"><h2>Sample Journalism</h2></Tooltip>
                        <span>12 min ago by <strong>Merline Poppins</strong></span>
                        <div className="dataview-area-column-footer">
                            <div className="history-area">
                                <a href="#/Reviewer"><Tooltip title="History" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#history-24"></use>
                                    </svg></Tooltip> 48
                                </a>
                            </div>
                            <ul>
                                <li><button className="pined-area" onClick={(e) => this.pinned(e)}>
                                    <Tooltip title="UnPinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#star-24"></use>
                                        </svg>
                                    </Tooltip>
                                    <Tooltip title="Pinned" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#starfull-24"></use>
                                        </svg>
                                    </Tooltip>
                                </button>
                                </li>
                                <li onClick={this.props.handlerPopup}> <button><Tooltip title="Clone" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#clone-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-24"></use>
                                    </svg></Tooltip></button></li>
                                <li> <button><Tooltip title="Delete" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#delete-24"></use>
                                    </svg>
                                </Tooltip></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pagenation-area">
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <Pagination
                            limit={2}
                            offset={this.state.offset}
                            total={10}
                            onClick={(e, offset) => this.handleClick(offset)}
                        />
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
export default TemplateDataView;