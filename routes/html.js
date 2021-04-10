const path = require('path');
// Basic route that sends the user first to the AJAX Page

module.exports = (app) => {
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/home.html'))); //landing page

    app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '../public/reserve.html'))); //sends user add a reservation
    
    
    app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/tables.html'))); //sends user add a reservation
}
