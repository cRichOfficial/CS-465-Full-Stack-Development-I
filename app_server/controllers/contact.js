var fs = require('fs');
var contactData = JSON.parse(fs.readFileSync('./data/contacts.json', 'utf8'));

/* GET Contact page */
const contact = (req, res) => {
    res.render('contact', { title: "Contact", contactData, contactActive: true});
};

module.exports = {
    contact
};