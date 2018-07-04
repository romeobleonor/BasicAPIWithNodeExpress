import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; // allows you to send object through http post, through db
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({
    exetended: true
}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));


app.get('/', function(req, res){
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})