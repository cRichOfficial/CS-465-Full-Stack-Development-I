var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET News page */
const news = (req, res) => {
    res.render('news', { title: "News", newsData, newsActive: true});
};

module.exports = {
    news
};