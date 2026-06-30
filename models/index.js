// const { DataTypes } = require("sequelize");
const Book = require("./book");
const Review = require("./Review")

// Association 
Book.hasMany(Review)
Review.belongsTo(Book)

module.exports = {
    Book,
    Review,
};

