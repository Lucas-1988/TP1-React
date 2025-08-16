declare module 'src/assets/Musica/serviceArtistas.js';

declare module 'src/assets/Musica/Artistas.db.js' {
  export type Artista = {
    id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    categoria: string;
  };
  export const artistasDB: Artista[];


}
