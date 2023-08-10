import express from 'express';
const app: express.Application = express();
app.get('/', (req, res) => {
res.send("HOLA MUNDOOOOO!!!");
})
app.listen(8080, () => {
console.log("Escuchando en el puerto 8080");
})
