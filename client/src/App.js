import React, { Component } from 'react';
import Vehicles from "./vehicles/vehicles-component";

import VehicleActions from "./actions/vehiclesActions";
import VehicleStore from "./store/vehiclesStore";
import Form from './form/form-component'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = VehicleStore.getState();
  }

  componentDidMount() {
    VehicleStore.listen(this.storeChanged);
    VehicleActions.read();
  }

  componentWillUnmount() {
    VehicleStore.unlisten(this.storeChanged);
  }


  storeChanged = (state) => {
    console.log("change Store", state)
    this.setState(state);
  }

  addVehicle = (NewVehicle) => {
    VehicleActions.create({ item: NewVehicle })
  }

  render() {
    const list = this.state.list;

    return (
      <div className="App">
        <div className="container">
          <h1>Vehicle Fleet</h1>
          <Form creactVehicle={this.addVehicle} />
          <Vehicles items={list} />
        </div>
      </div>
    );
  }
}

export default App;
