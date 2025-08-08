import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { musicService } from '../assets/Musica/service.js';

export type Cancion = {
  titulo: string;
  audioUrl: string;
  arte?: string;
  año?: string;
};

const LOCAL_KEY = 'cancionesExtra';
async function fetchCanciones(): Promise<Cancion[]> {
  const base = await musicService.getAllSongs();
  const extra = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  return [...base, ...extra];
}

function saveCancionLocal(cancion: Cancion) {
  const current = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  current.push(cancion);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(current));
}

export function useCanciones() {
  const queryClient = useQueryClient(); 
  const { data: canciones, isLoading, isError, error } = useQuery({
    queryKey: ['canciones'],
    queryFn: fetchCanciones
  });
  const mutation = useMutation({
    mutationFn: async (nuevaCancion: Cancion) => {
      
      return new Promise<Cancion>((resolve) => {
        setTimeout(() => {
          saveCancionLocal(nuevaCancion);
          resolve(nuevaCancion);
        }, 500);
      });
    },
    onSuccess: (nuevaCancion) => {
      
      queryClient.setQueryData<Cancion[]>(['canciones'], (old) =>
        old ? [...old, nuevaCancion] : [nuevaCancion]
      );
    }
  });
 const eliminarCancion = async (id: string) => {    
    await musicService.deleteSong(id);    
  };


  return {
    canciones: canciones || [],
    isLoading,
    isError,
    error,
    agregarCancion: mutation.mutate,
    eliminarCancion,
    estaAgregando: mutation.isPending
  };
}
