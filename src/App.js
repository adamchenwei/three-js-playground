import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import * as THREE from 'three'
             
class App extends Component {
  constructor() {
    super();
    console.log(THREE);
    this.camera = null;
    this.scene = null;
    this.geometry = null;
    this.material = null;
    this.rendererThreeJs = null;
    this.mesh = null;
    this.holder = () => {};
    this.holder = this.holder.bind(this);
    this.init();
  }

  init() {

    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );

    this.rendererThreeJs = new THREE.WebGLRenderer( { antialias: true } );
    this.rendererThreeJs.setSize( window.innerWidth, window.innerHeight );

  }
  
  animate() {
    const holder = ReactDOM.findDOMNode(this.holder);
    
    holder.appendChild(this.rendererThreeJs.domElement);
    //document.body.appendChild( this.rendererThreeJs.domElement );
    console.log(requestAnimationFrame);
    requestAnimationFrame( this.animate );

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    this.rendererThreeJs.render( this.scene, this.camera );
    
   }

  componentDidMount() {
    this.animate();
  }
  render() {
    this.animate();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div ref={(el) => {this.holder = el}}></div>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

export default App;
