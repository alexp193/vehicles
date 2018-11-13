import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { debug } from 'util';
const uuidv1 = require('uuid/v1');





export default class Form extends React.Component {


    state = {
        id: uuidv1(),
        name: "",
        time_created: Math.floor(Date.now() / 1000),
        car_type: ""
    };

    handleClickOpen = () => {
        this.setState({ open: true });
        this.setState({ valid: true })

    };

    handleClose = () => {
        this.setState({ open: false });
        this.setState({ valid: false })
    };

    submit = () => {
        let newVehicle = this.state;
        this.props.creactVehicle(newVehicle);
        this.setState({
            open: false,
            name: '',
            car_type: ''
        });

    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
        if (this.state.name && this.state.car_type) {
            this.setState({ valid: false })
        } else {
            this.setState({ valid: true })
        }
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Create New Vahicle</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">New Vehicle</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a current fields
                        </DialogContentText>
                        <TextField
                            autoFocus
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="dense"
                            id="name"
                            label="Vehicle name"
                            type="name"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            value={this.state.car_type}
                            onChange={this.handleChange('car_type')}
                            margin="dense"
                            id="name"
                            label="Car Type"
                            type="name"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.submit} disabled={this.state.valid} color="primary">
                            create
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

