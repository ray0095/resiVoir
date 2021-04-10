const express = require('express');

const app = express();
const PORT = 3000;

require('./routes/api')(app);
require('./routes/html')(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`App listening on PORT: http://localhost:${PORT}`));