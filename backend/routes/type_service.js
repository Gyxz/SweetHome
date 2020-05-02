const router = require('express').Router();
let Type_service = require('../models/type_service.model');

router.route('/').get((req, res) => {
    Type_service.find()
    .then(type_service => res.json(type_service))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const type_service_name = req.body.type_service_name;
  const description = req.body.description;
  const price = Number(req.body.price);
  const id_service = req.body.id_service;

  const newType_service = new Type_service({
    type_service_name,
    description,
    price,
    id_service,
  });

  newType_service.save()
  .then(() => res.json('Type_service added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Type_service.findById(req.params.id)
    .then(type_service => res.json(type_service))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Type_service.findByIdAndDelete(req.params.id)
    .then(() => res.json('Type_service deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Type_service.findById(req.params.id)
    .then(type_service => {
        type_service.username = req.body.type_service_name;
        type_service.description = req.body.description;
        type_service.duration = Number(req.body.price);
        type_service.id_service = req.body.id_service;

        type_service.save()
        .then(() => res.json('Type_service updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;