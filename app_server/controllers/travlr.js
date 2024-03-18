/* GET travlr page */
const travel = (req, res) => {
    res.render('travel', { title: "Travlr Getaways"});
};

module.exports = {
    travel
};