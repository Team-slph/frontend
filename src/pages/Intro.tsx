import React, { useState, useEffect } from 'react';
import './Intro.scss';

//SVG 로고 삽입
import SpotifyLogo from '../assets/spotify.svg';
import GoogleLogo from '../assets/google.svg';
import KakaoLogo from '../assets/kakao.svg';

const Intro: React.FC = () => {
    const [isDark, setIsDark] = useState(true);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsDark(false);
        }, 1000);

        setTimeout(() => {
            setShowButtons(true);
        }, 1500);
    }, []);

    return (
        <div className={`pre-login-container ${isDark ? 'dark-bg' : 'white-bg'}`}>
            <div className='d-flex position-fixed'>
                <h1 className="pre-login-title-1 ruslan-display">T</h1>
                <h1 className="pre-login-title-2 russo-one">ON</h1>
                <h1 className="pre-login-title-3 ruslan-display">E</h1>
            </div>
            
            {showButtons && (
                <div className="login-buttons position-fixed">
                    <button className="spotify-login">
                        <img src={SpotifyLogo} alt="Spotify" className='button-icon justify-content-start' />
                        <p>스포티파이로 시작하기</p>
                    </button>
                    <button className="google-login">
                        <img src={GoogleLogo} alt="Google" className='button-icon justify-content-start' />
                        <p>구글로 시작하기</p>
                    </button>
                    <button className="kakao-login">
                        <img src={KakaoLogo} alt="Kakao" className='button-icon justify-content-start' />
                        <p>카카오로 시작하기</p>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Intro;
