import { useState } from 'react';
import { musicService } from '../assets/Musica/service.js';

export function useCreateSong() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createSong = async (songData: any) => {
    setLoading(true);
    setError(null);
    try {
      const result = await musicService.createSong(songData);
      return result;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createSong, loading, error };
}