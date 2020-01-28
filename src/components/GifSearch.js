import React from 'react';

class GifSearch extends React.Component{
  constructor(){
    super()
    this.state = {
      searchTerm: ""
    }
  }

  updateSearchTerm = (event) => {
    let newSearchTerm = event.target.value
    this.setState({
      searchTerm: newSearchTerm
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="searchTerm" 
          value={this.props.searchTerm}
          onChange={event => this.updateSearchTerm(event)}
        />
        <input type="submit" value="Find Gifs"/>
      </form>
    )
  }
}

export default GifSearch