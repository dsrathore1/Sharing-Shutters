const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.static('Public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname)+ '/../Front-end/RG-Form/');
app.get('/', (req, res) => {
    res.render('sign-up-in.ejs');
});

app.listen(PORT, () => {
    console.log(`Listening localhost http://localhost:${PORT}`);
});