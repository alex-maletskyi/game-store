import express from 'express';
//import { PrismaClient } from './generated/prisma'; // Import Prisma Client
import cors from 'cors'; // Import CORS (cross-origin requests; ie requests from different ports can be problematic)
//this allows the app to do it with no issues
const { PrismaClient } = require('@prisma/client');

// Initialize Prisma Client
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});
const app = express();
const PORT = 5001;

app.use(cors());

// --- API ROUTES ---
app.get('/api/games', async (req, res) => {
  try {
    const games = await prisma.game.findMany();
    res.json(games);
  } catch (error) {
    console.error("Failed to fetch games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

// --- SERVER START ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});