import React, { Component } from 'react';

class NodeInfo extends Component {
    render() {
        return (
                <div class="col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Node Information</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default NodeInfo;