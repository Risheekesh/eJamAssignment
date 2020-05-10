const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');


const port =  4041;

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, '../client/build/')))


const routes = require('./routes');


app.use('/api',routes);

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})



app.listen(process.env.PORT || port, ()=>{
    console.log(`server started at port http://localhost:${port}`)
})