const { PrismaClient } = require('@prisma/client');

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

  // create three sample games
  const game1 = await prisma.game.create({
    data: {
      title: 'Cyberpunk 2077',
      platform: 'PC',
      price: 59.99,
      imageUrl: 'https://example.com/cyberpunk.jpg',
      description: 'A story-driven, open world RPG of the dark future.',
    },
  });

  const game2 = await prisma.game.create({
    data: {
      title: 'Elden Ring',
      platform: 'PlayStation 5',
      price: 69.99,
      imageUrl: 'https://example.com/eldenring.jpg',
      description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.',
    },
  });

  const game3 = await prisma.game.create({
    data: {
      title: 'Starfield',
      platform: 'Xbox Series X',
      price: 69.99,
      imageUrl: 'https://example.com/starfield.jpg',
      description: 'The next generation role-playing game set amongst the stars.',
    },
  });

  console.log({ game1, game2, game3 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });