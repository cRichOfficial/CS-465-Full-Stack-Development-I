/* GET Homepage */
const index = ((req, res) => {
    res.render('index', { title: "Home", homeActive: true});
});

module.exports = {
    index
};