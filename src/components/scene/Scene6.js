/*
| Scene 6. Truck carries hydrogen to the station.
*/
import React, { Component } from 'react';

const producerimagestyle = {
    width: "20vh",
    height: "20vh"
};

const truckstyle = {
    width: "20vh",
    height: "20vh"
};

class Scene6 extends Component {
    render() {
        return (
            <div class="container-fluid test-center">
                <div class="d-flex justify-content-center">
                    <img style={producerimagestyle} class="rounded" src="/assets/building1.png" alt="gas producer"/>
                    <img style={truckstyle} class="rounded" src="/assets/truck.png" alt="truck"/>
                </div>
                <div class="d-flex justify-content-center">
                    <h4 class="m-0 text-dark bg-white">Truck carries hydrogen to the station.</h4>
                </div>
            </div>
        )
    }
}
export default Scene6;