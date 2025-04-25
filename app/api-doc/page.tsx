'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import '../styles/api-doc.css';



export default function ApiDoc() {
  // Sidebar bo‘limlarini ochish/yopish uchun state
  const [isEndpointsOpen, setIsEndpointsOpen] = useState(true);
  const [isSchemasOpen, setIsSchemasOpen] = useState(false);

  return (
    <div className="api-doc-page">
      {/* Navbar */}
      <Navbar />

      <div className="api-doc-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <span className="sidebar-logo">🎵</span>
            <h2>Music API</h2>
          </div>
          <div className="sidebar-section">
            <h3>Overview</h3>
          </div>
          <div className="sidebar-section">
            <h3 onClick={() => setIsEndpointsOpen(!isEndpointsOpen)} className="section-toggle">
              Endpoints {isEndpointsOpen ? <FaChevronDown /> : <FaChevronRight />}
            </h3>
            {isEndpointsOpen && (
              <ul>
                <li>Playlist</li>
                <li>Songs</li>
                <li>Auth</li>
              </ul>
            )}
          </div>
          <div className="sidebar-section">
            <h3 onClick={() => setIsSchemasOpen(!isSchemasOpen)} className="section-toggle">
              Schemas {isSchemasOpen ? <FaChevronDown /> : <FaChevronRight />}
            </h3>
            {isSchemasOpen && (
              <ul>
                <li>SongData</li>
                <li>PlaylistData</li>
              </ul>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-header">
            <h1>Music API</h1>
            <span className="version">v1.0.0</span>
            <div className="content-actions">
              <button className="action-btn">Load an example</button>
              <button className="action-btn export-btn">Export</button>
            </div>
          </div>

          <section className="content-section">
            <h2>API Base URL</h2>
            <p><strong>Live Server:</strong> <code>https://music-api-f8wq.onrender.com</code></p>
          </section>

          <section className="content-section">
            <h2>Additional Information</h2>
            <p><strong>Contact:</strong> doston@example.com</p>
            <p><strong>Terms of Service:</strong> <a href="#">Read here</a></p>
          </section>

          <section className="content-section">
            <h2>Description of Music API</h2>
            <p>Current Limitations:</p>
            <ul>
              <li>Rate limiting: 100 requests per hour</li>
              <li>Supported formats: JSON only</li>
            </ul>
          </section>

          {/* Endpoints Documentation */}
          <section className="content-section">
            <h2>Endpointlar Hujjatlashtirish</h2>

            {/* Playlist Add */}
            <div>
              <h3>POST /api/playlist/add</h3>
              <p>Pleylistga qoshiq qoshish uchun ishlatiladi.</p>
              <p><strong>Header:</strong> <code>Authorization: Bearer &lt;token&gt;</code></p>
              <p><strong>Body:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    playlistName: "Favorites",
                    songId: "68074c0738bd722516beab05",
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Muvaffaqiyatli Javob:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    message: "Song added to playlist",
                    playlist: {
                      name: "Favorites",
                      songs: ["68074c0738bd722516beab05"],
                    },
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Xatolar:</strong></p>
              <ul>
                <li><code>401</code>: Foydalanuvchi autentifikatsiya qilinmagan.</li>
                <li><code>404</code>: Qoshiq yoki foydalanuvchi topilmadi.</li>
                <li><code>500</code>: Server xatosi.</li>
              </ul>
            </div>

            {/* Playlist Update */}
            <div>
              <h3>PUT /api/playlist/update</h3>
              <p>Pleylist nomini yangilash uchun ishlatiladi.</p>
              <p><strong>Header:</strong> <code>Authorization: Bearer &lt;token&gt;</code></p>
              <p><strong>Body:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    oldName: "Favorites",
                    newName: "My Favorites",
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Muvaffaqiyatli Javob:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    message: "Playlist updated successfully",
                    playlist: {
                      name: "My Favorites",
                      songs: ["68074c0738bd722516beab05"],
                    },
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Xatolar:</strong></p>
              <ul>
                <li><code>401</code>: Foydalanuvchi autentifikatsiya qilinmagan.</li>
                <li><code>404</code>: Pleylist topilmadi.</li>
                <li><code>500</code>: Server xatosi.</li>
              </ul>
            </div>

            {/* Playlist Delete */}
            <div>
              <h3>DELETE /api/playlist/delete</h3>
              <p>Pleylistni ochirish uchun ishlatiladi.</p>
              <p><strong>Header:</strong> <code>Authorization: Bearer &lt;token&gt;</code></p>
              <p><strong>Body:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    playlistName: "Favorites",
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Muvaffaqiyatli Javob:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    message: "Playlist deleted successfully",
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Xatolar:</strong></p>
              <ul>
                <li><code>401</code>: Foydalanuvchi autentifikatsiya qilinmagan.</li>
                <li><code>404</code>: Pleylist topilmadi.</li>
                <li><code>500</code>: Server xatosi.</li>
              </ul>
            </div>

            {/* Playlist Remove Song */}
            <div>
              <h3>DELETE /api/playlist/remove-song</h3>
              <p>Pleylistdan qoshiqni ochirish uchun ishlatiladi.</p>
              <p><strong>Header:</strong> <code>Authorization: Bearer &lt;token&gt;</code></p>
              <p><strong>Body:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    playlistName: "Favorites",
                    songId: "68074c0738bd722516beab05",
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Muvaffaqiyatli Javob:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    message: "Song removed from playlist",
                    playlist: {
                      name: "Favorites",
                      songs: [],
                    },
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Xatolar:</strong></p>
              <ul>
                <li><code>401</code>: Foydalanuvchi autentifikatsiya qilinmagan.</li>
                <li><code>404</code>: Pleylist yoki qoshiq topilmadi.</li>
                <li><code>500</code>: Server xatosi.</li>
              </ul>
            </div>

            {/* Playlist Get */}
            <div>
              <h3>GET /api/playlist</h3>
              <p>Foydalanuvchi pleylistlarini olish uchun ishlatiladi.</p>
              <p><strong>Header:</strong> <code>Authorization: Bearer &lt;token&gt;</code></p>
              <p><strong>Muvaffaqiyatli Javob:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    playlists: [
                      {
                        name: "Favorites",
                        songs: [
                          {
                            id: "68074c0738bd722516beab05",
                            title: "Hello",
                            artist: "Doston",
                          },
                        ],
                      },
                    ],
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Xatolar:</strong></p>
              <ul>
                <li><code>401</code>: Foydalanuvchi autentifikatsiya qilinmagan.</li>
                <li><code>404</code>: Foydalanuvchi topilmadi.</li>
                <li><code>500</code>: Server xatosi.</li>
              </ul>
            </div>

            {/* Songs Create */}
            <div>
              <h3>POST /api/songs</h3>
              <p>Yangi qoshiq qoshish uchun ishlatiladi.</p>
              <p><strong>Body:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    title: "Hello",
                    artist: "Doston",
                    audioUrl: "uploads/174536879192-Clothing_jpg",
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Muvaffaqiyatli Javob:</strong></p>
              <pre>
                {JSON.stringify(
                  {
                    id: "68074c0738bd722516beab05",
                    title: "Hello",
                    artist: "Doston",
                    audioUrl: "uploads/174536879192-Clothing_jpg",
                  },
                  null,
                  2
                )}
              </pre>
              <p><strong>Xatolar:</strong></p>
              <ul>
                <li><code>400</code>: Notogri malumot.</li>
                <li><code>500</code>: Server xatosi.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}