/*
| Scene 9. Charging completed.
*/
import React, { Component } from 'react';

const payimagestyle = {
    width: "20vh",
    height: "20vh"
};

class Scene9 extends Component {
    render() {
        return (
            <div class="container-fluid test-center">
                <div class="d-flex justify-content-center">
                    <img style={payimagestyle} class="rounded" src="/assets/pay.png" alt="pay"/>
                </div>
                <div class="d-flex justify-content-center">
                    <h4 class="m-0 text-dark bg-white">Charging completed.</h4>
                </div>
            </div>
        )
    }
}
export default Scene9;