import React, { Component } from 'react';

class NodeInfo extends Component {
    render() {
        return (
                <div class="col-lg-4">
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
                                            <td>
                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                    <label class="btn btn-outline-success active btn-sm">
                                                        <input type="radio" name="options" id="option1" autocomplete="off" checked /> ON
                                                </label>
                                                    <label class="btn btn-outline-danger btn-sm">
                                                        <input type="radio" name="options" id="option2" autocomplete="off" /> OFF
                                                </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>수소 생산자</td>
                                            <td>
                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                    <label class="btn btn-outline-success active btn-sm">
                                                        <input type="radio" name="options" id="option1" autocomplete="off" checked /> ON
                                                </label>
                                                    <label class="btn btn-outline-danger btn-sm">
                                                        <input type="radio" name="options" id="option2" autocomplete="off" /> OFF
                                                </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>수소 소비자</td>
                                            <td>
                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                    <label class="btn btn-outline-success active btn-sm">
                                                        <input type="radio" name="options" id="option1" autocomplete="off" checked /> ON
                                                </label>
                                                    <label class="btn btn-outline-danger btn-sm">
                                                        <input type="radio" name="options" id="option2" autocomplete="off" /> OFF
                                                </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>수소 운송업체</td>
                                            <td>
                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                    <label class="btn btn-outline-success active btn-sm">
                                                        <input type="radio" name="options" id="option1" autocomplete="off" checked /> ON
                                                </label>
                                                    <label class="btn btn-outline-danger btn-sm">
                                                        <input type="radio" name="options" id="option2" autocomplete="off" /> OFF
                                                </label>
                                                </div>
                                            </td>
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