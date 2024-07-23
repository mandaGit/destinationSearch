// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinations} = props
  const {name, imgUrl} = destinations
  return (
    <li>
      <img className="destination-image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
