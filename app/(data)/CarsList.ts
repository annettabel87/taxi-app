export const CarsList: ICar[] = [
  {
    id: 1,
    name: "Standard",
    image: "/cars/1.jpg",
    price: 15,
  },
  {
    id: 2,
    name: "Business",
    image: "/cars/2.jpg",
    price: 22,
  },
  {
    id: 3,
    name: "Premium",
    image: "/cars/3.jpg",
    price: 30,
  },
  {
    id: 4,
    name: "Child",
    image: "/cars/4.png",
    price: 20,
  },
];

export interface ICar {
  id: number;
  name: string;
  image: string;
  price: number;
}
