import express from 'express';
const app = express();
app.use(express.json());
app.get('/api/items', (req, res) => {
    res
        .status(200)
        .json({message: "Root API!", app: "inventory"})

})
const port = 3020;

app.listen(port, () => {
    console.log(`App running on port, ${port}`);
});