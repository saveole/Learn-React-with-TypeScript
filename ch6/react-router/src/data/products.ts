export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export const products = [
  {
    description:
      "A collection of navigational components that compose declaratively with your app",
    id: 1,
    name: "react router",
    price: 8,
  },
  {
    description: "A lib that helps manage state across your app",
    id: 2,
    name: "react redux",
    price: 12,
  },
  {
    description: "A lib that helps you interact with a REST API",
    id: 3,
    name: "react apollo",
    price: 10,
  },
  {
    description: "A lib that helps you implement robust forms",
    id: 4,
    name: "react hook form",
    price: 9,
  },
  {
    description: "A lib that provides utility CSS classes",
    id: 5,
    name: "tailwind css",
    price: 7,
  },
];
