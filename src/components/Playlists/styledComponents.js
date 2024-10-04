import styled from 'styled-components'
import {AiOutlineDelete} from 'react-icons/ai'

export const ListPlaylist = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const ImageDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  border-radius: 10px;
  height: 200px;
  width: 300px;
  margin-right: 10px;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`
export const ImageHeading = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`
export const ImageGenre = styled.p`
  font-size: 24px;
  color: #3b82f6;
`
export const Duration = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weigth: bold;
  margin-right: 30px;
`
export const DeleteIcon = styled(AiOutlineDelete)`
  font-size: 24px;
  color: #ffffff;
`
export const DeleteButton = styled.button`
  border: 0px none;
  background: transparent;
`
