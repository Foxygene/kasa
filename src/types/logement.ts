export type logement = {
  data: {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    equipments: string[];
    host: { name: string; picture: string };
    location: string;
    tags: string[];
    rating: string;
  };
};
