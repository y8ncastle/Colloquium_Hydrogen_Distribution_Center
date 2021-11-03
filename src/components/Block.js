import React, { Component } from 'react';

class Block extends Component {
    render() {
        var list = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            list.push(
                <tr>
                    <td>{data[i].num}</td>
                    <td>{data[i].mined}</td>
                    <td>{data[i].time}</td>
                </tr>
            );
            i+=1;
        }
        return (
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Blocks</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <div class="table-responsive">
                                <table class="table table-hover table-striped" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Num</th>
                                            <th>Mined by</th>
                                            <th>Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Block;