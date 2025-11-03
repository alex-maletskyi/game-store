import express from 'express';
//import { PrismaClient } from './generated/prisma'; // Import Prisma Client
import cors from 'cors'; // Import CORS (cross-origin requests; i.e. requests from different ports can be problematic)
//this allows the app to do it with no issues
const { PrismaClient } = require('@prisma/client');

// Initialize Prisma Client
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});
const app = express();
const PORT = 5001;

app.use(cors());

/* --- API ROUTES --- */
app.get('/api/games', async (req, res) => {
  try {
    const games = await prisma.game.findMany();
    res.json(games);
  } catch (error) {
      console.error("Failed to fetch games:", error);
      res.status(500).json({ error: "Failed to fetch games" });
  }
});

/* get single game by id */
app.get('/api/games/:id', async (req, res) => {
  /* get the id from the url parameters */
  const { id } = req.params;
  try {
    /* find the *first* game in the database that matches the id */
    const game = await prisma.game.findFirst({
      where: { id: id }
    });
    /* send the game back as json */
    res.json(game);
    } catch (error) {
        console.error("failed to fetch game:", error);
        res.status(500).json({ error: "Failed to fetch game" });
    }
});

/* --- SERVER START --- */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});