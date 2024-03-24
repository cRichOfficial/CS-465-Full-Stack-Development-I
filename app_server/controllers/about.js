/* GET About page */
const about = (req, res) => {
    res.render('about', { title: "About", aboutActive: true});
};

module.exports = {
    about
};