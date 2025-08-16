export type Artista = {
  nombre: string;
  imagen: string;
  likes: number;
  categoria: string;
};

export const artistasService: {
  getByCategoria: (categoria: string) => Promise<Artista[]>;
  getAll: () => Promise<Artista[]>;
};