var fs = require('fs');
var mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET Meals page */
const meals = (req, res) => {
    res.render('meals', { title: "Meals", mealsData, mealsActive: true});
};

module.exports = {
    meals
};