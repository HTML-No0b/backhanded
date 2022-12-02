const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
 
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id','product_name','price','stock','category_id']
    }
  })
});

router.get('/:id', (req, res) => {
  
  Category.findOne({
    include:{
      where: {
        id:req.params.id
      },
      include:{
        model:Product,
        attributes:['id','product_name','price','stock','category_id']
      }
      }
    }
  )});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
});

router.put('/:id', (req, res) => {
  
  Category.update(req.body,{
    where:{
      id:req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
});

module.exports = router;
