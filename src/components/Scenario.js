import React, { Component } from 'react';
import Scene0 from './scene/Scene0';
import Scene1 from './scene/Scene1';
import Scene2 from './scene/Scene2';
import Scene3 from './scene/Scene3';
import Scene4 from './scene/Scene4';
import Scene5 from './scene/Scene5';
import Scene6 from './scene/Scene6';
import Scene7 from './scene/Scene7';
import Scene8 from './scene/Scene8';
import Scene9 from './scene/Scene9';

let sceneNum = 9;  //0 to 9
function selectScene(value){

    if(!value && value!==0)  return <h3>undefined</h3>
    switch (value){
        case 0: return <Scene0></Scene0>
        case 1: return <Scene1></Scene1>
        case 2: return <Scene2></Scene2>
        case 3: return <Scene3></Scene3>
        case 4: return <Scene4></Scene4>
        case 5: return <Scene5></Scene5>
        case 6: return <Scene6></Scene6>
        case 7: return <Scene7></Scene7>
        case 8: return <Scene8></Scene8>
        case 9: return <Scene9></Scene9>
        default:
            return <h3>Unvalid Input</h3>
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