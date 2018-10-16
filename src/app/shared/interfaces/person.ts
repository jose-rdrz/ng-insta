export default interface Person {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  starchips: Array<string>;
  vehicles: Array<string>;
  url: string;
  created: Date;
  edited: Date;
}

export interface People {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Person>;
}
