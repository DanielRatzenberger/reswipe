export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Root {
  from: number;
  to: number;
  count: number;
  hits: Hit[];
}

export interface Hit {
  recipe: Recipe;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  images: Images;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalCO2Emissions: number;
  co2EmissionsClass?: string;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  tags?: string[];
}

export interface Images {
  THUMBNAIL: Thumbnail;
  SMALL: Small;
  REGULAR: Regular;
  LARGE?: Large;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Small {
  url: string;
  width: number;
  height: number;
}

export interface Regular {
  url: string;
  width: number;
  height: number;
}

export interface Large {
  url: string;
  width: number;
  height: number;
}

export interface Ingredient {
  text: string;
  quantity: number;
  measure?: string;
  food: string;
  weight: number;
  foodCategory?: string;
  foodId: string;
}

export interface RecipeDto {
  hits: Recipe[];
}
