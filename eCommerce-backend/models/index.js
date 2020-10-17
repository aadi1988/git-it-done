// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const sequelize = require('../config/connection');



// Products belongsTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {through: ProductTag, as: 'prodtag', foreignKey: 'product_id'});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag, as: 'prodtag', foreignKey: 'tag_id'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
