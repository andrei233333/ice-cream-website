export interface Product {
  id_product: number;
  name: string;
  description: string;
  image: string;
  ingredients: string;
  health_benefits: string;
  nutrition_facts: string;
}

export const products: Product[] = [
  {
    id_product: 1,
    name: "Carrot Flavor",
    description: "A bitter-sweet flavor of our ice cream.",
    image: "/images/carrot.png",
    ingredients: "Carrots, Coconut Milk, Agave Syrup",
    health_benefits: "Rich in beta-carotene, supports eye health and regulates sugar.",
    nutrition_facts: "Calories: 120, Protein: 2g, Carbs: 22g, Fat: 3g"
  },
  {
    id_product: 2,
    name: "Corn Flavor",
    description: "A milky sweet flavor of our ice cream.",
    image: "/images/sweet_potato.png",
    ingredients: "Corn, Almond Milk, Stevia",
    health_benefits: "Supports digestion and eye health.",
    nutrition_facts: "Calories: 110, Protein: 1g, Carbs: 19g, Fat: 2.5g"
  },
  {
    id_product: 3,
    name: "Cucumber Flavor",
    description: "A mild lightly sweet flavor of our ice cream.",
    image: "/images/cucumber.png",
    ingredients: "Cucumber, Coconut Cream, Honey",
    health_benefits: "Hydrating and helps with digestion.",
    nutrition_facts: "Calories: 80, Protein: 0.5g, Carbs: 14g, Fat: 1g"
  },
  {
    id_product: 4,
    name: "Sweet Potato Flavor",
    description: "A naturally sweet flavor of our ice cream.",
    image: "/images/corn.png",
    ingredients: "Sweet Potato, Soy Milk, Maple Syrup",
    health_benefits: "Boosts immunity and gut health.",
    nutrition_facts: "Calories: 130, Protein: 2.5g, Carbs: 24g, Fat: 3.5g"
  }
];
  