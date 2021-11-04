/*
| Scene 0. 평화로운 로딩세상
*/
import React, { Component } from 'react';

const imagestyle = {
    width: "20vh",
    height: "20vh"
};

class Scene0 extends Component {
    render() {
        return (
            <div class="text-center">
                <img style={imagestyle} class="rounded" src="/assets/car.png" alt="user's car" align="middle"/>
                <h3 class="m-0 text-dark bg-white">Loading...</h3>
            </div>
        )
    }
}
export default Scene0;