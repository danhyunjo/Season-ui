import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ReactComponent as BackBtn } from '../../icons/backBtn.svg';
import { ReactComponent as PlayBtn } from '../../icons/playBtn.svg';
import { ReactComponent as NextBtn } from '../../icons/nextBtn.svg';
import { ReactComponent as StopBtn } from '../../icons/stopBtn.svg';
import { ReactComponent as Santa } from '../../icons/santa.svg';

const MusicBoxStyle = styled.div`
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width * 0.45}px;
  border: 3px solid #b03b26;
  border-radius: 10px;
  padding: ${({ width }) => width * 0.04}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MusicBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ width }) => width * 0.02}px;
  margin-right: ${({ width }) => width * 0.06}px;
`;

const AlbumCover = styled.div`
  width: ${({ width }) => width * 0.375}px;
  height: ${({ width }) => width * 0.375 * 2.2}px;
  border-radius: 10px;
  overflow: hidden;
  margin: auto 0;
  img,
  svg {
    object-fit: cover;
  }
`;

const MusicTitle = styled.div`
  font-size: ${({ width }) => width * 0.05}px;
  font-weight: bold;
`;

const Singer = styled.div`
  font-size: ${({ width }) => width * 0.035}px;
  font-weight: 400;
`;

const PlayWrapper = styled.div`
  display: flex;
  gap: ${({ width }) => width * 0.02}px;
  width: 100%;
  align-items: center;
  margin-top: ${({ width }) => width * 0.05}px;
`;

const MusicBar = ({ albumCover, title, singer, width }) => {
  const [isClick, setIsClick] = useState(false);

  const handlePlayPauseClick = () => {
    setIsClick(prevState => !prevState);
  };

  return (
    <MusicBoxStyle width={width}>
      <AlbumCover width={width}>
        {typeof albumCover === 'string' ? (
          <img src={albumCover} alt='앨범 커버' />
        ) : (
          <Santa />
        )}
      </AlbumCover>
      <MusicBox width={width}>
        <MusicTitle width={width}>{title}</MusicTitle>
        <Singer width={width}>{singer}</Singer>
        <PlayWrapper width={width}>
          <BackBtn />
          <button
            onClick={handlePlayPauseClick}
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

MusicBar.propTypes = {
  albumCover: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  width: PropTypes.number,
};

MusicBar.defaultProps = {
  albumCover: <Santa />,
  title: 'Default Title',
  singer: 'Default Singer',
  width: 400,
};

export default MusicBar;
