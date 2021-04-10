const tableData = require("../data/tableData");

module.exports = (app) => {

    app.get('/api/tables', (req, res) => res.json(tableData));

    app.post('/api/tableData', (req, res) => {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        const newReservation = req.body;
      
        // Using a RegEx Pattern to remove spaces from newReservation
        newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
        console.log(newReservation);
    
        //pushing newReservation data to the array
        tableData.push(newReservation);
        res.json(newReservation);
      });

} 
