/*
| Scene 5. Hydrogen producers call transport vehicles 
*/
import React, { Component } from 'react';

const producerimagestyle = {
    width: "20vh",
    height: "20vh"
};

class Scene5 extends Component {
    render() {
        return (
            <div class="container-fluid test-center">
                <div class="d-flex justify-content-center">
                    <img style={producerimagestyle} class="rounded" src="/assets/building1.png" alt="gas station"/>
                    <img style={producerimagestyle} class="rounded" src="/assets/building2.png" alt="gas producer"/>
                </div>
                <div class="d-flex justify-content-center">
                    <h4 class="m-0 text-dark bg-white">Hydrogen producers call transport vehicles </h4>
                </div>
            </div>
        )
    }
}
export default Scene5;