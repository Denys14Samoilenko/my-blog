export interface User {
  userId: number;
  username: string;
  city: string;
  avatar: string;
  description: string;
  title: string;
  image: string;
  date: Date | number;
  tags?: string[];
  category: string;
}
