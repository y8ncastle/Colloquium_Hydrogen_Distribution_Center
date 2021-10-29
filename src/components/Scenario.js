import React, { Component } from 'react';
import Scene0 from './scene/Scene0';

let scene = 0;  //0 to 10
function selectScene(value){
    if (value === 0) return <Scene0></Scene0>
    else            return <h6>undefined</h6>
}

class Scenario extends Component {
    render() {
        return (
                <div class="col-lg-8">
                    <div class="card shadow mb-4"> 
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Scenario</h6>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                            { 
                                selectScene(scene)
                            }               
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Scenario;