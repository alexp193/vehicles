import alt from "../libs/alt.js";
import VehicleActions from "../actions/vehiclesActions";
import axios from 'axios';


class VehicleStore {
    constructor() {
        this.bindActions(VehicleActions);
        this.list = []
    }

    read() {
        axios.get('/api/list').then(res => {
            const list = res.data;
            this.setState({ list });
        })
    }

    create(veh) {
        let _this = this;
        const list = this.list;
        axios.post('/api/list', veh)
            .then(function (res) {
                let veh = res.data.success;
                _this.setState({
                    list: list.concat(veh.item)
                })
            })
    }

    update(item) {
        let id = item.id;
        let obj = item.item;
        let _this = this;
        const list = this.list;
        axios.put(`/api/list/${id}`, obj.item)
            .then(() => {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id == id) {
                        list[i] = obj.item;
                        _this.setState({
                            list: list
                        })
                        break; 
                    }
                }

            });

    }

    delete(id) {
        let _this = this;
        const list = this.list;
        axios.delete(`/api/list/${id}`)
            .then((res) => {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id === id) {
                        list.splice(i, 1);
                        _this.setState({
                            list: list
                        })
                        break
                    }
                }
            });
    }


}

export default alt.createStore(VehicleStore, "VehicleStore");