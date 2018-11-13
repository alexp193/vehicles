var express = require('express');
var router = express.Router();


var List = [{
    id: "a589d578-898c-11e8-9a94-a6cf71072f73",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "586a3426-2e70-4cb3-8b1f-67114c03cbe1",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "f929cc2c-f2f3-4e90-b953-9b5e491ae07d",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"
},
{
    id: "b7917823-bb3d-4f1a-9c19-9025184c506a",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "99f73790-8fb8-498f-bd30-f455b784bd78",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "df3c888c-b5c5-465f-aa16-9616230186b6",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "8179ea32-1db6-46cf-9068-2410d4a38ff2",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "97010e95-3078-4b11-bb3c-c665f9e4fc91",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "6bc4558a-49cb-41f7-8dee-a86e4d1cec6a",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "f6b6984f-8491-40c1-997f-95d01bdc45b1",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "063c69ef-dc47-4a93-9619-e622580749f1",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "ff41ab48-2dcd-4b0f-a413-9d4acc6e3961",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "d5cdeb4f-a447-48a0-bf64-076a2fbae25f",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "d9b4e53f-3e51-41c0-b37a-e0d85f55eacf",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "50be4175-addc-45d7-8fe9-69bbbf022163",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "50f5961c-f0ce-4bde-9b5d-f92be2d4ca7e",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "eab27932-cac6-4195-ad35-2de4a2b34fc8",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "6f4bf371-a0eb-47b8-a179-cf9c97df0a71",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "ff145354-4ad0-4eb5-98df-4c838e7d2dff",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "d01b7502-0f0b-4797-84aa-16cff10f35ec",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "54522605-a2c8-45d8-9ad5-7036adbdfcd5",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "3cade01c-253a-4888-adde-aafc10e05919",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "942bd97c-309f-4e89-b36a-df16c790af36",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "88db5a1c-de4f-412a-9931-6531e0b9d058",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "6ad50042-bb17-4d1b-b7e9-7f34d3f578ed",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "88e594a2-899a-4dd0-8267-a9460b249ba8",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "11b0b7da-8d2c-4478-97d6-fa3f1fae41a3",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "78c08cdf-a331-42c4-b737-2ad1ccfd9aed",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "1c92b96d-1447-4841-9fc3-224a5aab3ec3",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "cd4bcf3f-4d44-4b96-95ea-29377896d9b4",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "14456427-ff7c-4920-9dec-8ad540d1d78b",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "5a290195-7de1-4619-a516-0bdc8fe86c72",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "d9d3b01e-4834-4e33-b4d9-be7572e09553",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "51232656-c1e5-4c79-abbb-ed98a45c1b8c",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "c42838d8-bd03-4196-bc48-dc1ded48e100",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "ddd0090c-948e-4aa7-908d-279c321894bf",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

},
{
    id: "d87b07c0-f28e-4a4a-b722-d1b84ac5291d",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "1d517be6-d835-4c35-9d6d-152fc01a899b",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "da3d965d-a6bc-40aa-a4cc-c3ecfa4dc149",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"
},
{
    id: "064f01c7-9f48-404d-9511-c82a50435b8d",
    name: "alfaromeo",
    time_created: "1532197749",
    car_type: "SUV"
}, {
    id: "9647f361-949f-4b3e-a83b-6334cb46b1be",
    name: "siat",
    time_created: "1532197749",
    car_type: "Truck"

}, {
    id: "894276c8-3410-4b5d-ac10-726240eb70ee",
    name: "renault",
    time_created: "1532197749",
    car_type: "Hybrid"

}];


router.get('/', function (req, res) {
    res.json(List);
});

router.post('/', function (req, res) {
    res.status(200).json({
        success: req.body
    });
    List.push(req.body.item)
});

router.put('/:id', function (req, res) {
    var item = req.body;
    var id = item.id;
    res.json(List);
    for (var i = 0; i < List.length; i++) {
        if (List[i].id == id) {
            List[i] = item;
            break; 
        }
    }
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    // for (var i = 0; i < List.length; i++) {
    //     if (List[i].id === id) {
    //         list.splice(i, 1);
    //     }
    // }
    res.json();
});

module.exports = router;