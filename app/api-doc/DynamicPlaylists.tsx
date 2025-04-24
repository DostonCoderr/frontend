'use client';

import { useState, useEffect } from 'react';

export default function DynamicPlaylists() {
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDc4MGE0OTZiMzY5YzdkMzZkMGY4MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3NDUzMjIxNjksImV4cCI6MTc0NTQwODU2OX0.fy7ySby3t1GFrLmoYJKEJghqjenT5PsIjkIXwujJACA"; // Bu yerni o‘zingizning tokeningiz bilan almashtiring
        const response = await fetch('http://localhost:4000/api/playlist', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Pleylistlarni olishda xato yuz berdi');
        }
        const data = await response.json();
        setPlaylists(data.playlists || []);
      } catch (err: any) {
        setError(err.message);
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
              <strong>{playlist.name}</strong>: {playlist.songs?.length || 0} ta qo‘shiq
            </li>
          ))}
        </ul>
      ) : (
        <p>Pleylistlar topilmadi yoki yuklanmoqda...</p>
      )}
    </>
  );
}