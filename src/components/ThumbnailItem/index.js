import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, checkingImage} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnail = () => {
    checkingImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-button"
        onClick={onClickThumbnail}
        type="button"
      >
        <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
