/*
| Scene 3. charging completed
*/
import React, { Component } from 'react';

const carimagestyle = {
    width: "20vh",
    height: "20vh"
};

const gasimagestyle = {
    width: "17vh",
    height: "17vh"
};

class Scene3 extends Component {
    render() {
        return (
            <div class="container-fluid test-center">
                <div class="d-flex justify-content-center">
                    <img style={carimagestyle} class="rounded" src="/assets/car.png" alt="user's car"/>
                    <img style={gasimagestyle} class="rounded" src="/assets/gas.png" alt="gas station"/>
                </div>
                <div class="d-flex justify-content-center">
                    <h4 class="m-0 text-dark bg-white">Charging Completed!</h4>
                </div>
            </div>
            
        )
    }
}
export default Scene3;