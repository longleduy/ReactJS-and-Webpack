import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);

    }
    updateLvl = (e)=>{
       this.props.updateLvl(e.target.id,e.target.value);
      
    }
    edit = (idx,name,lvl)=>{
        this.props.edit(idx,name,lvl);
    }
    del = (idx_del)=>{
        this.props.del(idx_del);
    }
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.listEmp.map((list, k) => {
                                return (
                                    <tr key={k}>
                                        <td>{k+1}</td>
                                        <td>{list.name}</td>
                                        <td>
                                            <input type="button" className={list.level==="Admin"?"btn-level-size btn btn-level":"btn-level-size btn btn-default"} value={list.level} id={k} onClick={this.updateLvl} />
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-success flatButton"
                                                name="btnEdit" ref="btnEdit" onClick={()=>this.edit(k,list.name,list.level)}
                                                >Edit
                                            </button>&nbsp;
                                            <button type="button" className="btn btn-danger flatButton"
                                                name="btnDel" ref="btnDel" onClick={()=>this.del(k)}
                                                >Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }

}
export { Result };