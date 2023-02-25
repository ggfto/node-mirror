const cors = require('cors');
const express = require('express');
const app = express();
const port = 9000;

app.use(cors({
    origin: 'http://localhost:5500'
}));

app.use(express.json())

app.post('/api', (req, res) => {
    console.log(req.body);
    res.status(200);
    res.send(req.body);
});

app.get('/', (req, res) =>{
    res.status(200);
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Node Mirror listening on port ${port}`);
});