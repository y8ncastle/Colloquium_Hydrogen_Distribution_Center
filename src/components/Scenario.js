import React, { Component } from 'react';
import Scene0 from './scene/Scene0';

let sceneNum = 0;  //0 to 9
function selectScene(value){

    if(!value && value!==0)  return <h3>undefined</h3>
    switch (value){
        case 0:
            return <Scene0></Scene0>
        default:
            return <h3>default</h3>
    }
    
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
                                selectScene(sceneNum)
                            }               
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Scenario;