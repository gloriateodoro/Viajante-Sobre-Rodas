const express = require("express")
const app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/viajanteSobreRodas',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(x => console.log(`Connected to mongo Database name "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err))

const hostingRoutes = require("./routes/hostingRoutes")

app.use('/api/hosting', hostingRoutes);

app.get("/", (request, response) =>{
    response.send("Deu certo")
})

module.exports = app