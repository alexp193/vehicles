import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import VehicleActions from "../../actions/vehiclesActions";
import './vehicle.component.css'


export default class Vehicle extends React.Component {


    constructor(props) {
        super(props);

        this.state = { drilldown: false };

    }


    deleteItem = () => {
        VehicleActions.delete(this.props.vehicle.id)
    }

    handleClickEdit = () => {
        this.props.editItem(this.props.vehicle);
    }

    handleClick = event => {
        if (this.state.drilldown) {
            this.setState({ drilldown: false })
        } else {
            this.setState({ drilldown: true })
        }
    };

    getTime(timestemp) {
        var date = new Date(timestemp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime
    }





    render() {

        const drilldown = this.state.drilldown;


        return (
            <div className="item" onClick={this.handleClick} onBlur={this.handleBlur}>
                <span className="item-name"> {this.props.vehicle.name} </span>
                <span className="type"> {this.props.vehicle.car_type} </span>
                {drilldown ? <span > {this.getTime(this.props.vehicle.time_created)} </span> : null}


                <div className="buttom-section">
                    <div className="edit" onClick={this.handleClickEdit}>
                        <Button className="edit-icon" variant="fab" color="secondary" aria-label="Edit">
                            <Edit />
                        </Button>
                    </div>
                    <div class="align" onClick={this.deleteItem}>
                        <Button className="button-del" variant="fab" disabled aria-label="Delete" >
                            <DeleteIcon />
                        </Button>
                    </div>
                </div>
            </div>

        )
    }
}