import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as BackBtn } from '../../icons/backBtn.svg';
import { ReactComponent as PlayBtn } from '../../icons/playBtn.svg';
import { ReactComponent as NextBtn } from '../../icons/nextBtn.svg';
import { ReactComponent as StopBtn } from '../../icons/stopBtn.svg';

const MusicBoxStyle = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 180px;
  border: 1.5px solid #b03b26;
  border-radius: 10px;
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MusicBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 4px;
`;

const AlbumCover = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid black;
`;

const MusicTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Singer = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const PlayWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;
  margin-top: 8px;
`;

const MusicBar = () => {
  const [isClick, setIsClick] = useState(false);

  // 이 함수는 버튼의 클릭 이벤트에서 사용됩니다
  const handlePlayPauseClick = () => {
    setIsClick(prevState => !prevState); // Toggle the isClick state
  };

  return (
    <MusicBoxStyle>
      <AlbumCover alt='앨범 커버' />
      <MusicBox>
        <MusicTitle>노래제목</MusicTitle>
        <Singer>가수 이름</Singer>
        <PlayWrapper>
          <BackBtn />
          <button
            onClick={handlePlayPauseClick} // 버튼 클릭 시 함수 호출
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {isClick ? <StopBtn /> : <PlayBtn />}
          </button>
          <NextBtn />
        </PlayWrapper>
      </MusicBox>
    </MusicBoxStyle>
  );
};

export default MusicBar;
