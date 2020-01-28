import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount(){
    this.fetchGifs()
  }

  fetchGifs = (searchTerm="hello") => {
    let URL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=QBtdMBLdQzHS8RhWF1RMEEFi7I438qYg&rating=r`

    fetch(URL)
      .then(respObj => respObj.json())
      .then(respObj => this.setState({
        gifs: respObj.data.slice(0, 20)
      }))
  }

  render(){
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer 