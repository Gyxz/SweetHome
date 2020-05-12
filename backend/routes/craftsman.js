const router = require('express').Router();
let Craftsman = require('../models/craftsman.model');

router.route('/').get((req, res) => {
    Craftsman.find()
    .then(craftsman => res.json(craftsman))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const craftsman_name = req.body.craftsman_name;
  const description = req.body.description;
  const experience = Number(req.body.experience);
  const phone = req.body.phone;
  
  const newcraftsman = new Craftsman({
    craftsman_name,
    description,
    experience,
    phone,
    
  });

  newcraftsman.save()
  .then(() => res.json('Craftsman added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Craftsman.findById(req.params.id)
    .then(craftsman => res.json(craftsman))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Craftsman.findByIdAndDelete(req.params.id)
    .then(() => res.json('craftsman deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Craftsman.findById(req.params.id)
    .then(craftsman => {
        craftsman.craftsman_name = req.body.craftsman_name;
        craftsman.description = req.body.description;
        craftsman.experience = Number(req.body.experience);
        craftsman.phone = req.body.phone;

        craftsman.save()
        .then(() => res.json('craftsman updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;