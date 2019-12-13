import React, { Component } from 'react';
import MaterialTable from 'material-table'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class TemplateMapping extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };

    }
    componentDidMount() {
        let CheckBoxLength = document.querySelectorAll('.MuiCheckbox-root').length;
        for (let i = 0; i < CheckBoxLength; i++) {
            document.querySelectorAll('.MuiCheckbox-root')[i].classList.add('hide');
        }

    }

    editOption(e) {
        e.currentTarget.classList.add('hide');
        document.querySelector('.left-button').classList.remove('hide');

        document.querySelectorAll('.TemplateMapping-area-inner')[1].classList.add('editable');

        let CheckBoxLength = document.querySelectorAll('.MuiCheckbox-root').length;
        for (let i = 0; i < CheckBoxLength; i++) {
            document.querySelectorAll('.MuiCheckbox-root')[i].classList.remove('hide');
        }
    }

    saveOption(e) {
        e.currentTarget.parentNode.classList.add('hide');
        document.querySelector('.edit-button').classList.remove('hide');

        document.querySelectorAll('.TemplateMapping-area-inner')[1].classList.remove('editable');

        let CheckBoxLength = document.querySelectorAll('.MuiCheckbox-root').length;
        for (let i = 0; i < CheckBoxLength; i++) {
            document.querySelectorAll('.MuiCheckbox-root')[i].classList.add('hide');
        }
    }

    RevisionClick(e){
        this.props.history.push('/Reviewer')
    }

    render() {
        return (
            <div>
                <div className="page-headers">
                    <div className="page-headers-inner"><h1>Template Mapping</h1>
                    </div>
                </div>
                <div className="row TemplateMapping-area">
                    <div className="col-6">
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
                        <div className="TemplateMapping-area-inner">
                            <MaterialTable
                                title=""
                                data={[
                                    { id: 1, TemplateList: 'MEDIC_JOURN_0880', Revision: 'V 9.0' },
                                    { id: 2, TemplateList: '13_INT_CUP_JOURNAL', Revision: 'V 9.0', parentId: 1 },
                                    { id: 3, TemplateList: 'MEDIC_JOURN_0880', Revision: 'V 9.0', parentId: 1 },
                                    { id: 4, TemplateList: '13_INT_CUP_JOURNAL', Revision: 'V 9.0', parentId: 1 },
                                    { id: 5, TemplateList: 'MEDIC_JOURN_0880', Revision: 'V 8.0' },
                                    { id: 6, TemplateList: '13_INT_CUP_JOURNAL', Revision: 'V 8.0', parentId: 5 },
                                    { id: 7, TemplateList: 'MEDIC_JOURN_0880', Revision: 'V 8.0', parentId: 5 },
                                    { id: 8, TemplateList: '13_INT_CUP_JOURNAL', Revision: 'V 8.0', parentId: 5 },
                                ]}
                                columns={[
                                    { title: 'Template List', field: 'TemplateList' },
                                    { title: 'Revision', field: 'Revision',
                                    render: rowData => <a onClick={(e) => this.RevisionClick(e)}>{rowData.Revision}</a>},
                                ]}
                                parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                                options={{
                                    selection: false,
                                    paging: false,
                                    search: false,
                                    title: false,
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-6">
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
                        <div className="button-area-template">
                            <Button color="primary" className="edit-button" onClick={(e) => this.editOption(e)}>
                                <Tooltip title="Edit" placement="bottom">
                                    <svg aria-hidden="true" focusable="false" className="icons--18">
                                        <use href="#edit-sec-24"></use>
                                    </svg></Tooltip>edit
                            </Button>
                            <div className="left-button hide">
                                <Button color="primary" onClick={(e) => this.saveOption(e)}>
                                    <Tooltip title="Save" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#save-24"></use>
                                        </svg></Tooltip>Save
                            </Button>
                                <Button color="primary" onClick={(e) => this.saveOption(e)}>
                                    <Tooltip title="Cancel" placement="bottom">
                                        <svg aria-hidden="true" focusable="false" className="icons--18">
                                            <use href="#cancel-24"></use>
                                        </svg></Tooltip>Cancel
                            </Button>
                            </div>
                        </div>
                        <div className="TemplateMapping-area-inner">
                            <MaterialTable
                                title=""
                                data={[
                                    { id: 1, JournalList: 'MEDIC_JOURN_0880', Revision: 'V 9.0' },
                                    { id: 2, JournalList: '13_INT_CUP_JOURNAL', Revision: 'V 9.0', parentId: 1 },
                                    { id: 3, JournalList: 'MEDIC_JOURN_0880', Revision: 'V 9.0', parentId: 1 },
                                    { id: 4, JournalList: '13_INT_CUP_JOURNAL', Revision: 'V 9.0', parentId: 1 },
                                    { id: 5, JournalList: 'MEDIC_JOURN_0880', Revision: 'V 8.0' },
                                    { id: 6, JournalList: '13_INT_CUP_JOURNAL', Revision: 'V 8.0', parentId: 5 },
                                    { id: 7, JournalList: 'MEDIC_JOURN_0880', Revision: 'V 8.0', parentId: 5 },
                                    { id: 8, JournalList: '13_INT_CUP_JOURNAL', Revision: 'V 8.0', parentId: 5 },
                                ]}
                                columns={[
                                    { title: 'Journal List', field: 'JournalList' },
                                    { title: 'Revision', field: 'Revision',
                                    render: rowData => <a onClick={(e) => this.RevisionClick(e)}>{rowData.Revision}</a> },
                                ]}
                                parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                                options={{
                                    selection: true,
                                    paging: false,
                                    search: false,
                                    title: false,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TemplateMapping;