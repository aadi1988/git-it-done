const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [{model: Product}]}).then(ans => {
       res.json(ans);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({include: [{model: Product}], where: {
        id: req.params.id,
        
  }}).then(ans => {
      res.json(ans);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
      id: req.body.id,
      category_name: req.body.category_name
  }).then(ans => {
      res.json(ans);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
       category_name: req.body.category_name    
  },
  {
        where: {
              id: req.params.id
        }
  }).then(ans => {
      res.json(ans);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(ans => {
       res.json(ans);
  })
});

module.exports = router;
