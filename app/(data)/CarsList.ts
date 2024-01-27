export const CarsList: ICar[] = [
  {
    id: 1,
    name: "Standard",
    image: "/cars/1.jpg",
    price: 1.5,
  },
  {
    id: 2,
    name: "Business",
    image: "/cars/2.jpg",
    price: 2.2,
  },
  {
    id: 3,
    name: "Premium",
    image: "/cars/3.jpg",
    price: 3,
  },
  {
    id: 4,
    name: "Child",
    image: "/cars/4.png",
    price: 2,
  },
];

export interface ICar {
  id: number;
  name: string;
  image: string;
  price: number;
}
