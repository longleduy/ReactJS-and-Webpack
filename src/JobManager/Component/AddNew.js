import React, { Component } from 'react';

class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state={
            fullname:"",
            level:""
        }
    }
    canCel = () => {
        this.refs.divAddnew.style.display="none";
        this.props.canCel();
    }
    addNew = () => {
       this.props.addNew(this.refs.idx.value,this.refs.txtFullname.value,this.refs.sltAction.value);
       
    }
    render() {
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 divAddnew" style={{display:'none'}} ref="divAddnew">
                    <div className="panel panel-default ">
                        <div className="panel-heading">
                            <a onClick={this.canCel} ><span className="glyphicon glyphicon-remove"></span></a>
                            <h3 className="panel-title" style={{ textAlign: "center", fontWeight: "bold" }}>Add a new Job</h3>
                        </div>
                        <div className="panel-body">
                            <div className="divTxt">

                                <input type="text"  
                                    className="flatInput" placeholder="--- Full Name ---" name="txtFullname" ref="txtFullname" />
                                <input type="hidden"  
                                    className="flatInput"  name="idx" ref="idx" />    
                                <select className="flatSelect" name="sltAction" ref="sltAction" >
                                   <option value="0">--- Select level ---</option>
                                   <option  value="Admin">Admin</option>
                                    <option value="Member">Member</option>
                                </select>
                            </div>
                            <div className="divBtn">
                                <input type="button"  className="btn btn-success flatButton" ref="btnAdd" value="Add" onClick={this.addNew} />&nbsp;
                                    <input type="button" value="Cancel" className="btn btn-danger flatButton" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export { AddNew };