export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "men's clothing";
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
