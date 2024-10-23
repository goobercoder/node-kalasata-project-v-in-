import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
console.log("fuck you you can have the server at http://localhost:3000")
});
