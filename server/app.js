const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/GraphQL', {useNewUrlParser : true});
mongoose.connection.once('open',()=>{
    console.log('db is connected');
});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true
}));


app.listen(4000, () => {
    console.log('now listening for the requiests on port 4000');
});