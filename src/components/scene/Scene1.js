/*
| Scene 1. User's car moves to the station and requests hydrogen charging.
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

class Scene1 extends Component {
    render() {
        return (
            <div class="container-fluid test-center">
                <div class="d-flex justify-content-center">
                    <img style={carimagestyle} class="rounded" src="/assets/car.png" alt="user's car"/>
                    <img style={gasimagestyle} class="rounded" src="/assets/gas.png" alt="gas station"/>
                </div>
                <div class="d-flex justify-content-center">
                    <h4 class="m-0 text-dark bg-white">User's car moves to the station and requests hydrogen charging.</h4>
                </div>
            </div>
            
        )
    }
}
export default Scene1;