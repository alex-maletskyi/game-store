// Define a type for our Game object to use with TypeScript

export type Game = {
  id: string;
  title: string;
  platform: string;
  price: number;
  imageUrl: string;
  description: string;
  releaseDate?: string; // ? means it may be null
  genres?: string[];
  screenshots?: string[];
  salePercentage?: number;
  isNewRelease?: boolean;
};