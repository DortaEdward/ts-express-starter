import express from 'express';

require('dotenv').config();

const PORT = '5000' || process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message:'Working'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

