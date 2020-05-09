const router = require('express').Router();
let Service = require('../models/service.model');

router.route('/').get((req, res) => {
    Service.find()
    .then(service => res.json(service))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const servicename = req.body.servicename;
  const craftsman_name = req.body.craftsman_name;
  const type_service = req.body.type_service;

  const newservice = new Service({
    servicename,
    craftsman_name,
    type_service
    
  });

  newservice.save()
  .then(() => res.json('Service added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Service.findById(req.params.id)
    .then(service => res.json(service))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Service.findByIdAndDelete(req.params.id)
    .then(() => res.json('Service deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Service.findById(req.params.id)
    .then(service => {
        service.servicename = req.body.servicename;
        service.craftsman_name = req.body.craftsman_name;
        service.type_service = req.body.type_service;
        
        service.save()
        .then(() => res.json('Service updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;