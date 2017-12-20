
import React, { Component,Fragment } from 'react';
import { AddNew } from './Component/AddNew';
import { Filter } from './Component/Filter';
import { Result } from './Component/Result';

class JobManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emp: [{
                id: 1,
                name: 'Michel',
                level: 'Admin'
            },
            {
                id: 2,
                name: 'Jason',
                level: 'Member'
            },
            {
                id: 3,
                name: 'Tina',
                level: 'Member'
            },
            {
                id: 4,
                name: 'Nick',
                level: 'Member'
            }]
        };

    }
    componentWillMount() {

        //localStorage.removeItem('emp');
        if (localStorage.getItem('emp')) {
            var empList = JSON.parse(localStorage.getItem('emp'));
            this.setState({ emp: empList });
        }
    }
    addNew = (idx, name, value) => {
        var divAddnew = this.refs.comAddNew.refs.divAddnew;
        var btnAddnew = this.refs.comFilter.refs.btnAddnew;
        var fullName = this.refs.comAddNew.refs.txtFullname;
        var sltAction = this.refs.comAddNew.refs.sltAction;
        var btnAdd = this.refs.comAddNew.refs.btnAdd;
        btnAdd
        var index = this.refs.comAddNew.refs.idx;
        this.refs.divResult.setAttribute("class", "col-xs-8 col-sm-8 col-md-8 col-lg-8");
        divAddnew.style.display = "inline";
        btnAddnew.style.display = "none";
        if (idx !== null) {
            btnAdd.value = "Edit";
            index.value = idx;
            fullName.value = name;
            sltAction.value = value;
        }
        else {
            btnAdd.value = "Add";
            index.value = null;
            fullName.value = "";
            sltAction.value = "0";
        }
    }
    canCel = () => {
        var btnAddnew = this.refs.comFilter.refs.btnAddnew;
        btnAddnew.style.display = "inline";
        this.refs.divResult.setAttribute("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    }
    addNewMem = (idx, fullname, level) => {
        if (fullname === "" || level === "0") {
            if (fullname == "") {
                this.refs.comAddNew.refs.txtFullname.setAttribute("class", "btn-valid flatInput");
            }
            else if (level === "0") {
                this.refs.comAddNew.refs.sltAction.setAttribute("class", "btn-valid flatSelect");
            }
            return false;
        }
        else if (idx !== "" && idx != null) {
            var empAddNew = this.state.emp;
            empAddNew[idx] = { name: fullname, level: level };
            this.setState({ emp: empAddNew });
            localStorage.setItem('emp', JSON.stringify(empAddNew));
            this.refs.comAddNew.refs.txtFullname.setAttribute("class", "flatInput");
            this.refs.comAddNew.refs.sltAction.setAttribute("class", "flatSelect");
            this.refs.comAddNew.refs.txtFullname.value = "";
            this.refs.comAddNew.refs.sltAction.value = "0";
        }
        else {
            var empAddNew = this.state.emp;
            var id = empAddNew[empAddNew.length - 1].id + 1;
            empAddNew.push({
                id: id,
                name: fullname,
                level: level
            })
            this.setState({ emp: empAddNew });
            localStorage.setItem('emp', JSON.stringify(empAddNew));
            this.refs.comAddNew.refs.txtFullname.setAttribute("class", "flatInput");
            this.refs.comAddNew.refs.sltAction.setAttribute("class", "flatSelect");
            this.refs.comAddNew.refs.txtFullname.value = "";
            this.refs.comAddNew.refs.sltAction.value = "0";
        }
    }
    updateLvl = (idx, lvl) => {
        var listUpLvl = this.state.emp;
        var lev = (lvl === "Admin" ? "Member" : "Admin");
        listUpLvl[idx].level = lev;
        this.setState({ emp: listUpLvl });
        localStorage.setItem('emp', JSON.stringify(listUpLvl));
    }
    del = (idx_del)=>{
        var listEmp = this.state.emp;
        if(confirm("You sure ?") == true){
            listEmp.splice(idx_del,1);
            this.setState({emp : listEmp});
            localStorage.setItem('emp',JSON.stringify(listEmp));
        }
    }
    render() {
        return (
            <Fragment>
                <div className="container" style={{ marginTop: 20 }}>
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" ref="divResult">
                            <Filter addNew={this.addNew} generate={this.generate} ref="comFilter" />
                            <Result listEmp={this.state.emp} updateLvl={this.updateLvl} edit={this.addNew} del={this.del}/>
                        </div>
                        <AddNew canCel={this.canCel} ref="comAddNew" addNew={this.addNewMem} />
                    </div>
                </div>
            </Fragment>
        )
    }
}
export { JobManager };