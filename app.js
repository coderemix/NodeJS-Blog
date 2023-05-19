require('dotenv').config();

const express = require('express');

const expressLayout = require('express-ejs-layouts');


const connectDB = require('./server/config/db')



const app = express();
const PORT = 4000 || process.env.PORT;

//connect DB
connectDB()


app.use(express.static('public'));

//tempkating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// app.get('', (req, res) => {
//     res.send("Hello world");
// });
app.use('/', require('./server/routes/main'));


app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})
