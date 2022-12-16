import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mainRoutes from './routes/mainRoutes.js';
import path from 'path';

const app = express()
const port = 3000


app.use(bodyParser.json());
app.use('/', mainRoutes);
app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\Rafa\\Documents\\_projetosweb\\_techinjobs\\techinjobs-fatec-1-semestre\\frontend\\index.html');
});

app.get('/frontend/index', (req, res) => {
    res.sendFile('C:\\Users\\Rafa\\Documents\\_projetosweb\\_techinjobs\\techinjobs-fatec-1-semestre\\frontend\\index.html');
});

app.get('/frontend/cadastrocv', (req, res) => {
    res.sendFile('C:\\Users\\Rafa\\Documents\\_projetosweb\\_techinjobs\\techinjobs-fatec-1-semestre\\frontend\\cadastrocv.html');
});


app.all('*', (req, res) => res.send('Route does not exist.'));
    

app.listen(port, () => console.log(`This is an example app listening on port ${port}!`))
