import React from 'react';
import Vehicle from './/vehicle/vehicle.component';
import './vehicles-component.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import VehicleActions from "../actions/vehiclesActions";



export default class Vehicles extends React.Component {

    state = {
        open: false,
        item: {
            id: "",
            name: "",
            time: "",
            car_type: ""
        }
    };


    handleClickOpenEdit = (item) => {
        this.setState({ open: true, item: item })
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    renderVehicle = (veh) => {
        return (
            <li className="style-type" key={veh.id} >
                <Vehicle vehicle={veh} editItem={this.handleClickOpenEdit} drilldown={this.show} />
            </li>
        )
    }

    show = (item) => {
    }

    handleChange = name => event => {
        let newItem = { ...this.state.item, [name]: event.target.value }
        this.setState({
            item: newItem
        });
    };


    handleUpdate = () => {
        this.setState({ open: false })
        VehicleActions.update({ item: this.state, id: this.state.item.id });
    };


    render() {
        const items = this.props.items;

        return (
            <ul className="list">
                {items.map(this.renderVehicle)}
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">edit</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            please edit fields
                         </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="name"
                            type="name"
                            value={this.state.item.name}
                            onChange={this.handleChange('name')}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="type"
                            type="name"
                            value={this.state.item.car_type}
                            onChange={this.handleChange('car_type')}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleUpdate} color="primary">
                            edit
            </Button>
                    </DialogActions>
                </Dialog>
            </ul>
        )
    }
}