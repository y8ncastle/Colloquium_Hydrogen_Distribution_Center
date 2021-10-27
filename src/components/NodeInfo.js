import React, { Component } from 'react';
import './css/Com.css';
import onIcon from './image/onIcon.png';

class NodeInfo extends Component {
    render() {
        return (
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Node Information</h6>
                        </div>
                        <div class="card-body">
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <div class="table-responsive">
                                <table class="table table-hover table-borderless" id="dataTable" width="100%" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>수소 충전소</td>
                                            <td><img src={onIcon} className="On-Icon"/></td>
                                        </tr>
                                        <tr>
                                            <td>수소 생산자</td>
                                            <td><img src={onIcon} className="On-Icon"/></td>
                                        </tr>
                                        <tr>
                                            <td>수소 소비자</td>
                                            <td><img src={onIcon} className="On-Icon"/></td>
                                        </tr>
                                        <tr>
                                            <td>수소 운송업체</td>
                                            <td><img src={onIcon} className="On-Icon"/></td>
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
export default NodeInfo;