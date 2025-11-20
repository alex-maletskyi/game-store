// (we use the 'require' statement that works for your environment)
const { PrismaClient } = require('@prisma/client');
const axios = require('axios');

const prisma = new PrismaClient();

// (this function will get a random price)
function getRandomPrice() {
  const prices = [19.99, 29.99, 39.99, 49.99, 59.99, 69.99];
  return prices[Math.floor(Math.random() * prices.length)];
}

// (this function will get random sale/new status)
function getStoreStatus() {
  const roll = Math.random(); // (a random number between 0 and 1)
  
  if (roll < 0.15) { // (15% chance to be a new release)
    return { isNewRelease: true, salePercentage: null };
  }
  if (roll < 0.4) { // (25% chance to be on sale)
    return { isNewRelease: false, salePercentage: Math.floor(Math.random() * 50) + 10 }; // (10-60% off)
  }
  
  // (otherwise, it's a normal game)
  return { isNewRelease: false, salePercentage: null };
}

async function main() {
  // (1. clear out all old game data)
  await prisma.game.deleteMany();
  console.log('cleared old game data.');

  // (2. fetch games from rawg api)
  const apiKey = process.env.RAWG_API_KEY;
  const response = await axios.get(
    `https://api.rawg.io/api/games?key=${apiKey}&page_size=50`
  );
  const gamesFromApi = response.data.results;

  console.log(`fetched ${gamesFromApi.length} games from rawg.`);

  // (3. loop through api games and add our fake store data)
  for (const game of gamesFromApi) {
    const storeStatus = getStoreStatus();
    
    await prisma.game.create({
      data: {
        title: game.name,
        description: game.name, // (fetch full description later)
        platform: game.platforms[0]?.platform.name || 'pc',
        price: getRandomPrice(),
        imageUrl: game.background_image,
        releaseDate: game.released,
        // (extracting the lists of names/urls)
        genres: game.genres.map((g: any) => g.name),
        screenshots: game.short_screenshots.map((ss: any) => ss.image),
        // (adding our fake data)
        salePercentage: storeStatus.salePercentage,
        isNewRelease: storeStatus.isNewRelease,
      },
    });
  }

  console.log('database seeding complete! 🌱');
}

// (execute the main function)
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });