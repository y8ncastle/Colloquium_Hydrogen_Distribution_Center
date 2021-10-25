import React, { Component } from 'react';

class Transactions extends Component {
    render() {
        return (
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Transactions</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <div class="table-responsive">
                                <table class="table table-hover table-striped" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Transaction Hash</th>
                                            <th>Timestamp</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0x98b082ede1ebf8ffc3d8df7eab6cf1e7c4a5f8ef0b8e4f5e8d634adba04f2f3c</td>
                                            <td>40 mins ago</td>
                                        </tr>
                                        <tr>
                                            <td>0x5ffaf5b1015bdc1f75464606fff465d1fa5fb8b461883d97512d52a5d74baf3a</td>
                                            <td>41 mins ago</td>
                                        </tr>
                                        <tr>
                                            <td>0x5ffaf5b1015bdc1f75464606fff465d1fa5fb8b461883d97512d52a5d74baf3a</td>
                                            <td>41 mins ago</td>
                                        </tr>
                                        <tr>
                                            <td>0x5ffaf5b1015bdc1f75464606fff465d1fa5fb8b461883d97512d52a5d74baf3a</td>
                                            <td>41 mins ago</td>
                                        </tr>
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
export default Transactions;