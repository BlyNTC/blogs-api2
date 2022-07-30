const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogPosts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, { as: 'user', foreingKey: 'userId' });
    }
  }
  BlogPosts.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.NUMBER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BlogPosts',
    timestamps: false,
  });
  return BlogPosts;
};