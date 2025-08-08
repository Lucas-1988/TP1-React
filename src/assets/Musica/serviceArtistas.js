import { artistasDB } from '../Musica/Artistas.db';


export const artistasService = {
  getAll: () => Promise.resolve(artistasDB),
  getByCategoria: (categoria) =>
    Promise.resolve(artistasDB.filter(a => a.categoria === categoria)),
};