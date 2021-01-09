// Require Express
const express = require('express');
// Require Mongoose
require('./db/mongoose');
// Require API Routers 
const authorRouter = require('./routers/authors');
const bookRouter = require('./routers/books');

const app = express();

// PORT 3000
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(authorRouter);
app.use(bookRouter);

// Listen on PORT 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
});

