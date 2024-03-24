var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET Travel page */
const travel = (req, res) => {
    res.render('travel', { title: "Travel", trips, travelActive: true});
};

module.exports = {
    travel
};