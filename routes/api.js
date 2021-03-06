const tableData = require("../data/tableData");
const waitingList = require("../data/waitingList");

module.exports = (app) => {

    app.get('/api/tables', (req, res) => res.json(tableData));
    app.get('/api/reserve', (req, res) => res.json(waitingList));

    app.post('/api/tableData', (req, res) => {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        const newReservation = req.body;
      
        // Using a RegEx Pattern to remove spaces from newReservation
        newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
        console.log(newReservation);
    
        // //pushing newReservation data to the array
        if (tableData.length < 5){
          tableData.push(newReservation);
          console.log("Your reservation is confirmed")
          console.log(tableData)
        } else {
          waitingList.push(newReservation)
          console.log("Sorry, you've been added to the waitlist")
          console.log(waitingList)
        }
        res.json(newReservation);
        
      });

} 
