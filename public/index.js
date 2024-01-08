const express = require('express');
const app = express();
const path = require('path')

// Serve static files from the 'Projects' folder
app.use(express.static(path.join(__dirname, 'Projects')));
app.use(express.static(path.join(__dirname, 'assets')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/dad-jokes', (req, res) => {
    res.sendFile(__dirname + '/Projects/dad-jokes/index.html')
});

app.get('/indian-flag', (req, res) => {
    res.sendFile(__dirname + '/Projects/indianFlag/index.html')
});

app.get('/project-filter', (req, res) => {
    res.sendFile(__dirname + '/Projects/productFilter/index.html')
});











const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server Started, http://localhost:${PORT}`)
    });