import {
  ListPlaylist,
  ImageDetailsContainer,
  Image,
  HeadingContainer,
  ImageHeading,
  ImageGenre,
  Duration,
  DeleteButton,
  DeleteIcon,
} from './styledComponents'

const Playlists = props => {
  const {initialTracksList, onDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = initialTracksList

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <ListPlaylist>
      <ImageDetailsContainer>
        <Image src={imageUrl} alt="track" />
        <HeadingContainer>
          <ImageHeading>{name}</ImageHeading>
          <ImageGenre>{genre}</ImageGenre>
        </HeadingContainer>
      </ImageDetailsContainer>
      <ImageDetailsContainer>
        <Duration>{duration}</Duration>
        <DeleteButton data-testid="delete" onClick={onClickDelete}>
          <DeleteIcon />
        </DeleteButton>
      </ImageDetailsContainer>
    </ListPlaylist>
  )
}

export default Playlists
