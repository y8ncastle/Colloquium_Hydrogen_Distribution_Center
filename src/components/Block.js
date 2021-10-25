import React, { Component } from 'react';

class Block extends Component {
    render() {
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
                                        <tr>
                                            <td>13484980</td>
                                            <td>0x00192fb10df37c9fb26829eb2cc623cd1bf599e8</td>
                                            <td>37 mins ago</td>
                                        </tr>
                                        <tr>
                                            <td>13484979</td>
                                            <td>0xea674fdde714fd979de3edf0f56aa9716b898ec8 </td>
                                            <td>40 mins ago</td>
                                        </tr>
                                        <tr>
                                            <td>13484978</td>
                                            <td>0x829bd824b016326a401d083b33d092293333a830</td>
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
export default Block;