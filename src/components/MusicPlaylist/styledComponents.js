import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

export const MusicPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SingerContainer = styled(MusicPlaylistContainer)`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 45vh;
  color: #ffffff;
  justify-content: end;
  background-size: cover;
  padding: 20px;
`
export const SingerHeading = styled.h1`
  font-size: 38px;
  font-weight: bold;
`
export const Singer = styled.p`
  font-size: 30px;
`
export const SingerPlaylistContainer = styled(MusicPlaylistContainer)`
  background-color: #152850;
  height: 100vh;
  color: #ffffff;
  font-family: 'Roboto';
`
export const PlaylistSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const PlaylistHeading = styled(SingerHeading)`
 font-size: 34px;
`
export const Input = styled.input`
  border: 0px none;
  color: #cbd5e1;
  font-size: 24px;
  font-weight: bold;
  background: transparent;
  padding: 10px;
`
export const SearchContainer = styled.div`
  border: 1px solid #cbd5e1;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  padding: 10px;
`
export const SearchIcon = styled(FiSearch)`
  color: #ffffff;
  font-size: 20px;
`
export const UlList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
export const NotFound = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`
