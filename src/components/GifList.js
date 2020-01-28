import React from 'react'

class GifList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.gifs.map(gif => {
          return(
            <li key={gif.id}>
              <img src={gif.images.original.url} alt={gif.title}/>
            </li>
          ) 
        } )}
      </ul>
    )
  }
}

export default GifList