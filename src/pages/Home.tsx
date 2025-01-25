import React, { useState } from 'react';
import './Home.scss';

import PlayIcon from '../assets/play.svg';
import PlayBack from '../assets/play-back.svg';
import PlayForward from '../assets/play-forward.svg';

interface NowPlayingProps {
  albumImage?: string | null;
  title?: string | "제목";
  artist?: string | "아티스트";
}

const playlists = [
  {
    id: 1,
    image: 'oasis.jpg',
    title: '잠을 깨우는 신나는 락밴드 모음',
    creator: '김토토',
    tags: ['#해외락', '#모닝송', '#출퇴근'],
  },
  {
    id: 2,
    image: 'teen-pop-hits.jpg',
    title: 'Billboard Top100귀 선곡',
    creator: '마이',
    tags: ['#빌보드', '#Top100', '#팝'],
  },
  {
    id: 3,
    image: 'kpop-hits.jpg',
    title: 'Kpop 숨은 명곡 발견',
    creator: 'ㄴㅇ',
    tags: ['#kpop', '#숨듣명'],
  },
  {
    id: 4,
    image: 'kpop-hits.jpg',
    title: 'Kpop 숨은 명곡 발견',
    creator: 'ㄴㅇ',
    tags: ['#kpop', '#숨듣명'],
  },

  // 더 많은 플레이리스트가 추가될 수 있음
]

const Home: React.FC<NowPlayingProps> = ({ albumImage, title, artist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev < playlists.length - 3 ? prev + 1 : playlists.length - 3)
    );
  };

  return (
    <div className="home-container">
      <div className="now-playing">
        {/* <img src="album-cover.jpg" alt="Album Cover" className="album-art" /> */}
        <div className="album-art">
          {albumImage ? (
            <img src={albumImage} alt={title} className="album-image" />
          ) : (
            <div className="album-placeholder"></div>
          )}
          <div className="album-center-dot"></div>
        </div>
        <div className="song-info">
          <h2>espresso</h2>
          <p>sabrina carpenter</p>

          <div className="controls">
            <button>
              <img src={PlayBack} alt="Play Back" />
            </button>
            <button>
              <img src={PlayIcon} alt="Play" />
            </button>
            <button>
              <img src={PlayForward} alt="Play Forward" />
            </button>
          </div>
          <hr />
        </div>
      </div>

      <section className="playlist-section">
        <h2>인기 플레이리스트</h2>
        <div className="playlist-slider">
          <button className="prev-btn" onClick={handlePrev}>&#10094;</button>
          <div 
            className="playlist" 
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            {playlists.map((playlist) => (
              <div key={playlist.id} className="playlist-item">
                {playlist.image ? (
                  <div className="playlist-placeholder">
                    <img src={`/assets/${playlist.image}`} alt="" onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                ) : (
                  <div className="playlist-placeholder"></div>
                )}
                <h3>{playlist.title}</h3>
                <p>{playlist.creator}</p>
                <div className="playlist-tags">
                  {playlist.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={handleNext}>&#10095;</button>
        </div>
      </section>

      <section className="playlist-section">
        <h2>선호 카테고리 '감성' 찾기</h2>
        <div className="playlist-slider">
          <button className="prev-btn" onClick={handlePrev}>&#10094;</button>
          <div 
            className="playlist" 
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            {playlists.map((playlist) => (
              <div key={playlist.id} className="playlist-item">
                {playlist.image ? (
                  <div className="playlist-placeholder">
                    <img src={`/assets/${playlist.image}`} alt="" onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                ) : (
                  <div className="playlist-placeholder"></div>
                )}
                <h3>{playlist.title}</h3>
                <p>{playlist.creator}</p>
                <div className="playlist-tags">
                  {playlist.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={handleNext}>&#10095;</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
