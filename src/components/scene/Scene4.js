/*
| Scene 4. Station requests hydrogen charging to the hydrogen producers
*/
import React, { Component } from 'react';

const producerimagestyle = {
    width: "20vh",
    height: "20vh"
};

const gasimagestyle = {
    width: "20vh",
    height: "20vh"
};

class Scene4 extends Component {
    render() {
        return (
            <div class="container-fluid test-center">
                <div class="d-flex justify-content-center">
                    <img style={gasimagestyle} class="rounded" src="/assets/gas.png" alt="gas station"/>
                    <img style={producerimagestyle} class="rounded" src="/assets/building1.png" alt="gas producer"/>
                </div>
                <div class="d-flex justify-content-center">
                    <h4 class="m-0 text-dark bg-white">Station requests hydrogen charging to the hydrogen producers</h4>
                </div>
            </div>
        )
    }
}
export default Scene4;