// Define a type for our Game object to use with TypeScript

export type Game = {
  id: string;
  title: string;
  platform: string;
  price: number;
  imageUrl: string;
  description: string;
  // Add any other properties like salePercentage, isNew, etc.
};