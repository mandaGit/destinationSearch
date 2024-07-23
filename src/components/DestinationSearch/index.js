// Write your code here//
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchedInput = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              className="search-input"
              type="search"
              value={searchInput}
              placeholder="Search"
              onChange={this.onChangeSearchInput}
            />
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt=" search icon"
            />
          </div>
          <ul className="destination-item-container">
            {searchedInput.map(eachItem => (
              <DestinationItem destinations={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
