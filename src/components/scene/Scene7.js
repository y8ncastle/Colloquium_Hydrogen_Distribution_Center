/*
| Scene 7. The truck arrives at the station.
*/
import React, { Component } from 'react';

const truckstyle = {
    width: "20vh",
    height: "20vh"
};

const gasimagestyle = {
    width: "20vh",
    height: "20vh"
};

class Scene7 extends Component {
    render() {
        return (
            <div class="container-fluid test-center">
                <div class="d-flex justify-content-center">
                    <img style={truckstyle} class="rounded" src="/assets/truck.png" alt="gas vehicle"/>
                    <img style={gasimagestyle} class="rounded" src="/assets/gas.png" alt="gas station"/>
                </div>
                <div class="d-flex justify-content-center">
                    <h4 class="m-0 text-dark bg-white">The truck arrives at the station.</h4>
                </div>
            </div>
        )
    }
}
export default Scene7;