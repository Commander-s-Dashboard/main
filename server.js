const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.get('/api/data', async (req, res) => {
  try {
    const data = await prisma.yourModel.findMany();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
