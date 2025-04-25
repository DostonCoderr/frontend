'use client';

import { useState, useEffect } from 'react';

// Playlist turi uchun interface
interface Playlist {
  name: string;
  songs?: { id: string; title: string; artist: string }[];
}

export default function DynamicPlaylists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGEzNjAyYTQxNWNkMzI4ZDI5MjQ2NyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3NDU0OTk2NjcsImV4cCI6MTc0NTU4NjA2N30.VXjwXnYfVqKXb5kkPFtnqk1-TCdbmQuCqthBomCSsho";
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/playlist`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Pleylistlarni olishda xato yuz berdi');
        }
        const data = await response.json();
        setPlaylists(data.playlists || []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Nomalum xato');
        }
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <>
      {error ? (
        <p className="error">{error}</p>
      ) : playlists.length > 0 ? (
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>
              <strong>{playlist.name}</strong>: {playlist.songs?.length || 0} ta qoshiq
            </li>
          ))}
        </ul>
      ) : (
        <p>Pleylistlar topilmadi yoki yuklanmoqda...</p>
      )}
    </>
  );
}