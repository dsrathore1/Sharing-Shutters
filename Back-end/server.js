const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.render(path.resolve(__dirname)+'/Public/HTML/index.ejs');
})

app.listen(PORT, () => {
    console.log(`Listening localhost http://localhost:${PORT}`);
})