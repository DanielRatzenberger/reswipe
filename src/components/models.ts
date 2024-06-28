export interface Root {
  hits: Hit[];
}

export interface Hit {
  data: Model;
}

export interface Model {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Model2[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  tags?: string[];
}


export interface Model2 {
  text: string;
  quantity: number;
  measure?: string;
  food: string;
  weight: number;
  foodCategory?: string;
  foodId: string;
}

