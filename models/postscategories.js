const {
  Model,
} = require('sequelize');

const associate = (models, PostsCategories) => {
  models.BlogPosts.belongsToMany(models.Categories, {
    as: 'categories',
    through: PostsCategories,
    foreignKey: 'postId',
    otherKey: 'categoryId',  
  });
  models.Categories.belongsToMany(models.BlogPosts, {
    as: 'blogPosts',
    through: PostsCategories,
    foreignKey: 'categoryId',
    otherKey: 'postId',
  });
};

module.exports = (sequelize, DataTypes) => {
  class PostsCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      associate(models, this);
    }
  }
  PostsCategories.init({
    postId: DataTypes.NUMBER,
    categoryId: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'PostsCategories',
    timestamps: false,
  });
  return PostsCategories;
};